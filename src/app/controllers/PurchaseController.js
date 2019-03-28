const User = require('../models/User')
const Purchase = require('../models/Purchase')
const Ad = require('../models/Ad')
const jobs = require('../jobs')
const Queue = require('../services/Queue')

class PurchaseController {
  async index (req, res) {
    const purchase = await Purchase.paginate(
      {},
      {
        page: req.query.page || 1,
        populate: ['ad', 'customer'],
        limit: 20,
        sort: '-createdAt'
      }
    )

    return res.json(purchase)
  }

  async store (req, res) {
    const { ad, content } = req.body

    const purchaseAd = await Ad.findById(ad).populate('author')

    const user = await User.findById(req.userId)

    Queue.create(jobs.PurchaseMail.key, {
      ad: purchaseAd,
      content,
      user
    }).save()

    const purchase = await Purchase.create({
      customer: user,
      ad: purchaseAd
    })

    return res.json(purchase)
  }

  async update (req, res) {
    const { id } = req.params

    const user = await User.findById(req.userId)

    const purchase = await Purchase.findByIdAndUpdate(
      id,
      { sold: 1 },
      {
        new: true
      }
    ).populate(['ad', 'customer'])

    await Ad.findByIdAndUpdate(purchase.ad._id, { purchaseBy: id })

    Queue.create(jobs.AdSoldMail.key, {
      user,
      purchase
    }).save()

    return res.json(purchase)
  }

  async destroy (req, res) {
    const { id } = req.params

    await Purchase.findByIdAndDelete(id)

    return res.send()
  }
}

module.exports = new PurchaseController()

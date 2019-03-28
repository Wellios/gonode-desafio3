const Mail = require('../services/Mail')

class AdSoldMail {
  get key () {
    return 'AdSoldMail'
  }

  async handle (job, done) {
    const { user, purchase } = job.data

    await Mail.sendMail({
      from: `${user.name} <${user.email}>`,
      to: purchase.customer.email,
      subject: `Intenção de compra do anúncio: ${purchase.ad.title} aceita`,
      template: 'sold',
      context: { user, purchase }
    })

    return done()
  }
}

module.exports = new AdSoldMail()

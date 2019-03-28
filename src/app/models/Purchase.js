const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

const Purchase = new mongoose.Schema({
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  ad: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Ad',
    required: true
  },
  sold: {
    type: Number,
    required: true,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

Purchase.plugin(mongoosePaginate)

module.exports = mongoose.model('Purchase', Purchase)

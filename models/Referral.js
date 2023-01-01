import mongoose from 'mongoose'
var aggregatePaginate = require('mongoose-aggregate-paginate-v2')

const referralSchema = new mongoose.Schema(
  {
    id: Number,
    campaign_id: Number,
    first_name: String,
    last_name: String,
    code: String,
    reach: Number,
    referrals_count: Number,
    url: String,
    converted_referrals_count: Number,
    email: String,
    qualified: Boolean,
  },
  { timestamps: true }
)

referralSchema.plugin(aggregatePaginate)

export const Referral =
  mongoose.models.Referral || mongoose.model('Referral', referralSchema)

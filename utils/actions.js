import dbConnect from '../utils/dbConnect'
import { Referral } from '../models/Referral.js'

// get all Referrals
export const getReferrals = async (countryCode) =>
  await Referral.aggregate([
    { $unwind: { path: '$campaign' } },
    { $match: { 'campaign.name': countryCode } },
    {
      $setWindowFields: {
        partitionBy: '$campaign_id',
        sortBy: { reach: -1 },
        output: {
          denseRankReach: {
            $denseRank: {},
          },
        },
      },
    },
  ])

// get a single Referral
export const getReferral = async (id) => await Referral.findById(id)

// create a new Referral
export const createReferral = async (newReferral) =>
  await Referral.create(newReferral)

// update a Referral
export const updateReferral = async (id, updatedReferral) =>
  await Referral.findByIdAndUpdate(id, updatedReferral, { new: true })

// delete a Referral
export const destroyReferral = async (id) =>
  await Referral.findByIdAndRemove(id)

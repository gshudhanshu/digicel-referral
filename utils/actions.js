import dbConnect from '../utils/dbConnect'
import { Referral } from '../models/Referral.js'
import superjson from 'superjson'

// get all Referrals
export const getReferrals = async (countryCode, search, page, limit) => {
  // return await Referral.aggregate([
  //   { $unwind: { path: '$campaign' } },
  //   { $match: { 'campaign.name': countryCode } },
  //   {
  //     $setWindowFields: {
  //       partitionBy: '$campaign_id',
  //       sortBy: { reach: -1 },
  //       output: {
  //         denseRankReach: {
  //           $denseRank: {},
  //         },
  //       },
  //     },
  //   },
  // ])

  const options = {
    page: page || 1,
    limit: limit || 25,
  }

  let searchAggregate = {}
  if (search !== '' || search !== undefined || search !== null) {
    searchAggregate = {
      $text: {
        $search: search,
        $caseSensitive: false,
        $diacriticSensitive: false,
      },
    }
  }

  var myAggregate = Referral.aggregate([
    {
      $match: searchAggregate,
    },
    { $unwind: { path: '$campaign' } },
    {
      $match: { 'campaign.name': countryCode },
    },
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
  return Referral.aggregatePaginate(myAggregate, options)
    .then(function (results) {
      console.log(results)
      return results
    })
    .catch(function (err) {
      console.log(err)
    })
}

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

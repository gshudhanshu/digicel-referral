import { getReferrals } from '../../utils/actions'

export default async function handler(req, res) {
  const { countryCode, search, page, limit } = req.query
  try {
    const referrals = await getReferrals(countryCode, search, page, limit)
    res.status(200).json(referrals)
  } catch (error) {
    throw new Error(error)
  }
}

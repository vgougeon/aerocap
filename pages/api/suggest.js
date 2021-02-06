// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const axios = require('axios')
export default async function helloAPI(req, res) {
  // const result = await axios.get(`http://dev.virtualearth.net/REST/v1/Locations/${"Paris"}?maxResults=10&key=AqbL-5RHig7wP3r1UAN79qWen6TfUce6dtcCALCsMcn7-YxmUyaaUjzXA2Sjz4AW`)
  const result = await axios.get(`http://dev.virtualearth.net/REST/v1/Autosuggest?query=${req.query.place}&maxResults=10&key=AqbL-5RHig7wP3r1UAN79qWen6TfUce6dtcCALCsMcn7-YxmUyaaUjzXA2Sjz4AW`)
  res.status(200).json(result.data.resourceSets[0].resources[0].value)
}

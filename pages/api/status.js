// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const axios = require('axios')
const geolib = require('geolib')
export default async function helloAPI(req, res) {
  // const result = await axios.get(`http://dev.virtualearth.net/REST/v1/Locations/${"Paris"}?maxResults=10&key=AqbL-5RHig7wP3r1UAN79qWen6TfUce6dtcCALCsMcn7-YxmUyaaUjzXA2Sjz4AW`)
  const start = await axios.get(`http://dev.virtualearth.net/REST/v1/Locations/${req.query.start}?maxResults=1&key=AqbL-5RHig7wP3r1UAN79qWen6TfUce6dtcCALCsMcn7-YxmUyaaUjzXA2Sjz4AW`)
  const end = await axios.get(`http://dev.virtualearth.net/REST/v1/Locations/${req.query.end}?maxResults=1&key=AqbL-5RHig7wP3r1UAN79qWen6TfUce6dtcCALCsMcn7-YxmUyaaUjzXA2Sjz4AW`)
  
  // res.status(200).json(start.data.resourceSets[0].resources[0])
  const startP = {
    longitude: start.data.resourceSets[0].resources[0].point.coordinates[0],
    latitude: start.data.resourceSets[0].resources[0].point.coordinates[1]
  }
  const endP = {
    longitude: end.data.resourceSets[0].resources[0].point.coordinates[0],
    latitude: end.data.resourceSets[0].resources[0].point.coordinates[1]
  }

  const dist = geolib.getDistance(startP, endP)
  res.status(200).json(dist)
}

const express = require('express')
const app = express()
const zipData = require('../data/data-1234.js').data
const weatherData = require('../data/data-4321.js').data
const fetch = require('node-fetch')
const oneDay = `http://dataservice.accuweather.com/forecasts/v1/daily/1day/`
const location = `http://dataservice.accuweather.com/locations/v1/postalcodes/search`
const apiKey = `iAkZ3P3xqeAbK3aAqkkZ8HTx0rDn1Es6` //should be in ENV variable

app.use((req, res, next)=> {
  res.setHeader('Access-Control-Allow-Origin', '*')
  next()
})

app.get('/', (req, res) => {
  res.status(200).send('ok')
})

app.get('/getByZip/:zip', async (req, res) => {
  zip = req.params.zip
  const url = `${location}?apikey=${apiKey}&q=${zip}`
  const key = await fetch(url)
    .then(data => data.json())
    .then(data => {
      data = data.filter(item => item.Country.ID === 'US')
      return data[0].ParentCity.Key
    })
  const data = await fetch(`${oneDay}${key}?apikey=${apiKey}`)
    .then(data => data.json())
  res.status(200).send(data)
})

app.get('*', (req, res) => {
  res.status(404).send('Not Found')
})

module.exports = app

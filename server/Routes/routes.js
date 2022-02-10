const express = require('express');

const router = express.Router();

const SearchKeywords = require('../models/searchKeywordsModel');

const CurrentWeather = require('../models/currentWeatherModel');

router.get('/api/searched/locations', async (req, res) => {
  try {
    const result = await SearchKeywords.find();
    res.json(result);
  } catch (err) {
    res.status(500).json('internal error');
  }
});

router.post('/api/searched/locations', (req, res) => {
  console.log(`User searched for: ${req.body.keyword}`);
  console.log(req.body);
  const newSearchedLocation = new SearchKeywords(req.body);

  newSearchedLocation
    .save()
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

router.get('/api/weather/current', async (req, res) => {
  try {
    const result = await CurrentWeather.find();
    res.json(result);
  } catch (err) {
    res.status(500).json('internal error');
  }
});

router.post('/api/weather/current', (req, res) => {
  console.log(
    `Weather condition data at ${req.body.city}, ${req.body.country}  User searched for :`,
  );
  console.log(req.body);

  const newCurrentWeather = new CurrentWeather(req.body);

  newCurrentWeather
    .save()
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

module.exports = router;

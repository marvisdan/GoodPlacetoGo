const express = require('express');

const Place = require('../models/place');

const router = express.Router();

router.post('/places', async (req, res) => {
  const place = new Place(req.body);
  try {
    await place.save();
    res.status(201).send(place);
  } catch (e) {
    res.status(400).send(e);
  }
})

router.get('/places', async (req, res) => {
  const places = await Place.find({});
  try {
    res.send(places);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.get('/places/:id', async (req, res) => {
  const _id = req.params.id;
  try {
    const place = await Place.findById(_id);
    console.log('place', place);
    if (!place) {
      return res.status(404).send({ error: 'Place not found!' });
    }
    res.send(place);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.patch('/places/:id', async (req, res) => {
  const _id = req.params.id;
  const updates = Object.keys(req.body);
  const allowUpdates = ['name', 'address', 'zipcode', 'description', 'city', 'image_url'];
  const isValidOperation = updates.every((x) => allowUpdates.includes(x));
  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid Update' });
  }
  try {
    const place = await Place.findByIdAndUpdate(_id, req.body, { new: true, runValidators: true });
    if (!place) {
      return res.status(404).send({ error: 'Place not found' });
    }
    res.send(place);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.delete('/places/:id', async (req, res) => {
  const _id = req.params.id;
  try {
    const place = await Place.findByIdAndDelete(_id);
    if (!place) {
      return res.status(404).send({ error: 'Place not found!' })
    }
    res.send(place);
  } catch (e) {
    res.status(500).send(e)
  }
});

module.exports = router;
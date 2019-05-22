
const mongoose = require('mongoose');

const Place = mongoose.model('Place', {
  name: {
    type: String,
    required: true, // required all time
    trim: true,
  },
  address: {
    type: String,
    required: true,
    trim: true,
  },
  zipcode: {
    type: String,
    required: true,
    maxlength: 5,
  },
  city: {
    type: String,
    required: true,
    trim: true,
    default: 'Paris',
  },
  image_url: {
    type: String,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
    default: '',
  }
});

module.exports = Place;
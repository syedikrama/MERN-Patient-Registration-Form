let mongoose = require('mongoose');

const patientSchema =  mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  gender: {
    type: String,
    required: true,
    // enum: ['Male', 'Female', 'Other']
  },
  phoneNumber: {
    type: String,
    required: true
  },
  address: {
    type: String
  },
  registrationDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Patient', patientSchema);

let express = require('express');
let route = express.Router();
let patient_register = require('../Controller/patient_register');

route.post('/register', patient_register.register );

module.exports = route;
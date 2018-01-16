'use strict';

const express = require('express');
const router = express.Router();

const auth = require('../controllers/auth')
const cities = require('../controllers/cities')
const users = require('../controllers/users')


/*
* User Routes
*/
router.route('/users')
  .post(users.createUser)
  //.get(auth.validateUser, users.getAllUsers)

router.route('/users/:userId/id')
  .get(auth.validateUser, users.getUserById)
  .put(auth.validateUser, users.updateUser)
  .delete(auth.validateUser, users.deleteUser)

router.route('/users/:email/email')
  .get(users.getUserByEmail)

router.route('/cities')
  .post(cities.createCity)
  .get(cities.getAllCities)

router.route('/cities/:cityId/id')
  .get(cities.getCityById)
  .put(cities.updateCity)
  .delete(cities.deleteCity)


/*
* Auth Routes
*/
// router.route('/auth/login')
//   .post(auth.loginUser);

// expose routes through router object
module.exports = router;

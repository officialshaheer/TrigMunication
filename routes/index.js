const express = require('express');
const router = express.Router();
const { postRegister } = require('../controllers/index');

// INDEX ROUTES
/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'TrigMunication' });
});

// USER ROUTES 
/* GET /register. - Getting the registration page*/
router.get('/register', (req, res, next) => {
  res.send('GET /register');
});

/* POST /register. Posting values from registration page to database */
router.post('/register', (req, res, next) => {
  res.send('POST /register');
});

/* GET /login. Getting login page of user */
router.get('/login', (req, res, next) => {
  res.send('GET /login');
});

/* POST /login. Posting values from user login page to database  */
router.post('/login', (req, res, next) => {
  res.send('POST /login');
});

/* GET /profile. - Display Profile  */
router.get('/profile', (req, res, next) => {
  res.send('GET /profile');
});

/* PUT /profile/:user_id - Updating profile */
router.put('/profile/:user_id', (req, res, next) => {
  res.send('PUT /profile/:user_id');
});

/* GET /forgot - Forgot Password*/
router.get('/forgot', (req, res, next) => {
  res.send('GET /forgot');
});

/* PUT /forgot - Requesting for Forgot Password Link with the email as posting it */
router.put('/forgot', (req, res, next) => {
  res.send('PUT /forgot');
});

/* GET /reset/:token - Getting the reset link in index page with a token for an interval of time */
router.get('/reset/:token', (req, res, next) => {
  res.send('GET /reset/:token');
});

/* PUT /reset/:token - Updating Password in the database */
router.put('/reset/:token', (req, res, next) => {
  res.send('PUT /reset/:token');
});

module.exports = router;

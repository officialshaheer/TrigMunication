const express = require('express');
const router = express.Router();
const { postRegister, postLogin, getLogout } = require('../controllers/index');
const { errorHandler } = require('../middleware/index');
// another way of writing the above two lines
// const { postRegister } = require('../controllers'); - it will find the index.js file in the directory automatically.
// const { errorHandler } = require('../middleware'); -it will find the index.js file in the directory automatically.


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
router.post('/register', errorHandler(postRegister));

/* GET /login. Getting login page of user */
router.get('/login', (req, res, next) => {
  res.send('GET /login');
});

/* POST /login. Posting values from user login page to database  */
router.post('/login', postLogin);
/* GET /logout */
router.get('/logout', getLogout);

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

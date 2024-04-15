const express = require('express');
const { body } = require('express-validator');
const router = express.Router();

router.get('/', (req, resp) => {
    console.log('Test route is fine');
    resp.send("Test route is fine");
})

// const checkEmail = () => body("email").isEmail();
// const checkPassword = () => body('password').isLength({min:5});
// const checkName = () => body('name').notEmpty();
// const checkLocation = () => body('location').notEmpty();

// router.post('/signup', checkName, checkEmail, checkPassword, checkLocation, signup);

const { signup, login } = require('../controllers/Auth');
const { auth } = require('../middlewares/auth');

router.get('/test', auth, (req, resp) => {
    console.log("Auth is fine");
    resp.send("Auth is fine");
});

router.post('/signup', signup);
router.post('/login', login);


module.exports = router;
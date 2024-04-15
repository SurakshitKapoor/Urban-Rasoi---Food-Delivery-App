
const express = require('express');
const router = express.Router();


const { foodData } = require('../controllers/foodController');


router.get('/foodData', foodData);

module.exports = router;
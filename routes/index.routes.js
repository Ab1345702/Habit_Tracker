const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controller');

console.log('In router');

router.get('/', homeController.home);


router.use('/users', require('./users.routes'));
router.use( homeController.notFound)

module.exports = router;
const express = require('express');
const router = express.Router();
const handler = require('../controllers/parkController');

router.get('/get', handler.get);
router.post('/update', handler.update);

module.exports = router;

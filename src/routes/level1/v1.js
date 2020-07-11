const routerController = require('../../controllers/level1/v1');

const express = require('express');
const router = express.Router();
router.use('/', routerController);

module.exports = router;

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('v1 API');
});

router.get('/data', (req, res) => {
  res.send('v1 data');
});

module.exports = router;

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('v2 API');
});

router.get('/data', (req, res) => {
  res.send('v2 data');
});

module.exports = router;

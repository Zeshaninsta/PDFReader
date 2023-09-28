const express = require('express');
const router = express.Router();

router.get('/api/data', (req, res) => {
  res.json({ message: 'This is your API response.' });
});

module.exports = router;

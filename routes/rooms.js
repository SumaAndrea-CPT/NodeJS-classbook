const express = require('express');
const db = require('../db');

const router = express.Router();

// Auth middleware
function isAuth(req, res, next) {
  if (!req.session.user) return res.redirect('/');
  next();
}

router.get('/', isAuth, async (req, res) => {
  const [rooms] = await db.query('SELECT * FROM rooms');
  res.render('rooms', { rooms });
});

module.exports = router;
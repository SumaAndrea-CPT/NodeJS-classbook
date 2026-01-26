const express = require('express');
const db = require('../db');

const router = express.Router();

function isAuth(req, res, next) {
  if (!req.session.user) return res.redirect('/');
  next();
}

// View bookings
router.get('/', isAuth, async (req, res) => {
  const [bookings] = await db.query(`
    SELECT bookings.id, rooms.name, booking_date, start_time, end_time
    FROM bookings
    JOIN rooms ON rooms.id = bookings.room_id
    WHERE bookings.user_id = ?
  `, [req.session.user.id]);

  const [rooms] = await db.query('SELECT * FROM rooms');

  res.render('bookings', { bookings, rooms });
});

// Create booking
router.post('/add', isAuth, async (req, res) => {
  const { room_id, booking_date, start_time, end_time } = req.body;

  try {
    await db.query(
      'INSERT INTO bookings (user_id, room_id, booking_date, start_time, end_time) VALUES (?, ?, ?, ?, ?)',
      [req.session.user.id, room_id, booking_date, start_time, end_time]
    );
  } catch (err) {
    console.error(err);
  }

  res.redirect('/bookings');
});

// Delete a booking
router.post('/delete', isAuth, async (req, res) => {
  const { id } = req.body;

  try {
    await db.query(
      'DELETE FROM bookings WHERE id = ? AND user_id = ?',
      [id, req.session.user.id]
    );
  } catch (err) {
    console.error(err);
  }

  res.redirect('/bookings');
});

module.exports = router;
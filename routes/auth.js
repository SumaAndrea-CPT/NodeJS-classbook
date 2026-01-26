const express = require('express');
const bcrypt = require('bcrypt');
const db = require('../db');

const router = express.Router();

// Login page
router.get('/', (req, res) => {
  res.render('login');
});

// Login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const [rows] = await db.query(
    'SELECT * FROM users WHERE username = ?',
    [username]
  );

  if (rows.length === 0) {
    return res.render('login', { error: 'Invalid credentials' });
  }

  const user = rows[0];
  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    return res.render('login', { error: 'Invalid credentials' });
  }

  req.session.user = {
    id: user.id,
    username: user.username,
    role: user.role
  };

  res.redirect('/dashboard');
});

// Logout
router.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/');
  });
});

// Show registration form
router.get('/register', (req, res) => {
  res.render('register');
});

// Handle registration
router.post('/register', async (req, res) => {
  const { username, password, confirm_password } = req.body;

  if (password !== confirm_password) {
    return res.render('register', { error: 'Passwords do not match' });
  }

  const [existing] = await db.query(
    'SELECT * FROM users WHERE username = ?',
    [username]
  );
  if (existing.length > 0) {
    return res.render('register', { error: 'Username already exists' });
  }

  // Hash password
  const hashed = await bcrypt.hash(password, 10);
  
  await db.query(
    'INSERT INTO users (username, password, role) VALUES (?, ?, ?)',
    [username, hashed, 'user']
  );

  res.redirect('/');
});

module.exports = router;
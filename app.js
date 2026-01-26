const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');

const authRoutes = require('./routes/auth');
const roomRoutes = require('./routes/rooms');
const bookingRoutes = require('./routes/bookings');

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(session({
  secret: 'supersecretkey',
  resave: false,
  saveUninitialized: false
}));

// Handlebars
app.engine('hbs', exphbs.engine({
  extname: 'hbs'
}));
app.set('view engine', 'hbs');


app.use((req, res, next) => {
  res.locals.user = req.session.user;
  next();
});

// Routes
app.use('/', authRoutes);
app.use('/rooms', roomRoutes);
app.use('/bookings', bookingRoutes);

// Dashboard
app.get('/dashboard', (req, res) => {
  if (!req.session.user) return res.redirect('/');
  res.render('dashboard');
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

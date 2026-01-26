const db = require('../db');

async function migrate() {
  try {
    console.log('Adding start_time and end_time columns to bookings table...');
    await db.query(`
      ALTER TABLE bookings 
      ADD COLUMN start_time TIME,
      ADD COLUMN end_time TIME
    `);
    console.log('Migration successful');
  } catch (err) {
    if (err.code === 'ER_DUP_FIELDNAME') {
      console.log('Columns already exist. Skipping.');
    } else {
      console.error('Migration failed:', err);
    }
  } finally {
    process.exit();
  }
}

migrate();
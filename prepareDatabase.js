// require('dotenv').config();
const postgres = require('postgres');

const sql = process.env.DATABASE_URL
  ? postgres(process.env.DATABASE_URL, { ssl: { rejectUnauthorized: false } })
  : postgres();

async function createTable() {
  await sql`
  CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    name VARCHAR  NOT NULL,
    description TEXT NOT NULL,
    short_description TEXT NOT NULL,
    price DECIMAL NOT NULL,
    image VARCHAR  NOT NULL,
    instagram_url VARCHAR  NOT NULL
  );
  `;
}
createTable()
  .then(() => {
    console.log('complited');
    process.exit();
  })
  .catch(err => {
    console.error('error:  ', err);
    process.exit(1);
  });

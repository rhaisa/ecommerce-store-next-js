exports.up = async (sql) => {
  console.log('Creating products table...');
  await sql`
   CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255)  NOT NULL,
		description TEXT NOT NULL,
    short_description TEXT NOT NULL,
    price DECIMAL NOT NULL,
		image VARCHAR(255)  NOT NULL,
		instragram_url VARCHAR(255)  NOT NULL
    );`;
};

exports.down = async (sql) => {
  console.log('Droping products table...');
  await sql`
   DROP TABLE products;`;
};

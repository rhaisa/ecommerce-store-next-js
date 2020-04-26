const defaultProducts = [
  {
    name: 'Karen Oslen',
    description:
      'Provide beauty services, such as shampooing, cutting, coloring, and styling hair, and massaging and treating scalp. May also apply makeup, dress wigs, perform hair removal, and provide nail and skin care services.',
    short_description: 'Curly hair specialist.',
    price: 40,
    image: '/karenoslen.jpg',
    instragram_url:
      'https://www.instagram.com/colorbymattrez/?utm_source=ig_embed',
  },

  {
    name: 'Marco Rodrigues',
    description:
      'Provide beauty services, such as shampooing, cutting, coloring, and styling hair, and massaging and treating scalp. May also apply makeup, dress wigs, perform hair removal, and provide nail and skin care services.',
    short_description: 'Hair Design Specialist.',
    price: 50,
    image: '/marcorodrigues.jpeg',
    instragram_url:
      'https://www.instagram.com/colorbymattrez/?utm_source=ig_embed',
  },

  {
    name: 'Leticia Lopes',
    description:
      'Provide beauty services, such as shampooing, cutting, coloring, and styling hair, and massaging and treating scalp. May also apply makeup, dress wigs, perform hair removal, and provide nail and skin care services.',
    short_description:
      'Balayage, ombre & hair colouring techniques specialist.',
    price: 60,
    image: '/leticialopes.jpg',
    instragram_url:
      'https://www.instagram.com/colorbymattrez/?utm_source=ig_embed',
  },

  {
    name: 'Manoela Monteiro',
    description:
      'Provide beauty services, such as shampooing, cutting, coloring, and styling hair, and massaging and treating scalp. May also apply makeup, dress wigs, perform hair removal, and provide nail and skin care services.',
    short_description: 'Hair extensions specialist.',
    price: 60,
    image: '/manoelamonteiro.jpg',
    instragram_url:
      'https://www.instagram.com/colorbymattrez/?utm_source=ig_embed',
  },
];

exports.up = async function (sql) {
  console.log('Inserting products table...');
  await sql`
  INSERT INTO products ${sql(
    defaultProducts,
    'name',
    'short_description',
    'description',
    'price',
    'image',
    'instragram_url',
  )};
    `;
};

exports.down = async function (sql) {
  console.log('Deleting products table...');
  await sql`
  DELETE FROM products
  WHERE name in (${products.map((product) => product.name)}) 
  `;
};

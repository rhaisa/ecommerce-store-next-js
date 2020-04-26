const defaultProducts = [
  {
    id: '1',
    name: 'Karen Oslen',
    description:
      'Provide beauty services, such as shampooing, cutting, coloring, and styling hair, and massaging and treating scalp. May also apply makeup, dress wigs, perform hair removal, and provide nail and skin care services.',

    shortDescription: 'Curly hair specialist.',
    price: 40,
    image: '/karenoslen.jpg',
    instragramUrl:
      'https://www.instagram.com/colorbymattrez/?utm_source=ig_embed',
  },

  {
    id: '2',
    name: 'Marco Rodrigues',
    description:
      'Provide beauty services, such as shampooing, cutting, coloring, and styling hair, and massaging and treating scalp. May also apply makeup, dress wigs, perform hair removal, and provide nail and skin care services.',

    shortDescription: 'Hair Design Specialist.',
    price: 50,
    image: '/marcorodrigues.jpeg',
    instragramUrl:
      'https://www.instagram.com/colorbymattrez/?utm_source=ig_embed',
  },

  {
    id: '3',
    name: 'Leticia Lopes',
    description:
      'Provide beauty services, such as shampooing, cutting, coloring, and styling hair, and massaging and treating scalp. May also apply makeup, dress wigs, perform hair removal, and provide nail and skin care services.',
    shortDescription: 'Balayage, ombre & hair colouring techniques specialist.',
    price: 60,
    image: '/leticialopes.jpg',
    instragramUrl:
      'https://www.instagram.com/colorbymattrez/?utm_source=ig_embed',
  },

  {
    id: '4',
    name: 'Manoela Monteiro',
    description:
      'Provide beauty services, such as shampooing, cutting, coloring, and styling hair, and massaging and treating scalp. May also apply makeup, dress wigs, perform hair removal, and provide nail and skin care services.',
    shortDescription: 'Hair extensions specialist.',
    price: 60,
    image: '/manoelamonteiro.jpg',
    instragramUrl:
      'https://www.instagram.com/colorbymattrez/?utm_source=ig_embed',
  },
];

exports.up = async function (sql) {
  console.log('Inserting products table...');
  await sql`
  INSERT INTO products ${sql(
    products,
    'name',
    'shortDescription',
    'description',
    'price',
    'image',
    'instragramUrl',
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

// exports.down = async (client) => {
//   // just in case...
// };

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'users',
    [
      {
        id: 1,
        name: 'E-commerce Admin',
        email: 'adm@gmail.com',
        password: 'a4c86edecc5aee06eff8fdeda69e0d04', // senha: md5('--adm2@21!!--')
        role: 'administrator',
      },
      {
        id: 2,
        name: 'Fulana Pereira',
        email: 'fulana@gmail.com',
        password: '3c28d2b0881bf46457a853e0b07531c6', // senha: md5('fulana@123')
        role: 'seller',
      },
      {
        id: 3,
        name: 'Cliente Zé Fonseca',
        email: 'zefonseca@email.com',
        password: '126645a9100b475ba710b8947de33fcf', // senha: md5('zefonseca@123')
        role: 'customer',
      },
    
    ],

    {},
  ),

  down: (queryInterface) => queryInterface.bulkDelete('users', null, {}),
};

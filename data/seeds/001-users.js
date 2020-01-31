
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'harry', password: '1234567', department: 'Finance'},
        {id: 2, username: 'Narry', password: '123qwerty', department: 'Finance'},
        {id: 3, username: 'Carry', password: '123123', department: 'Finance'},

        {id: 4, username: 'Barry', password: 'ABCasd', department: 'Sales'},
        {id: 5, username: 'Darry', password: '123543', department: 'Sales'},
        {id: 6, username: 'Earry', password: '123tyrt', department: 'Sales'},

        {id: 7, username: 'Garry', password: '123ABC', department: 'IT & Technology'},
        {id: 8, username: 'Farry', password: '123ABC33', department: 'IT & Technology'}

      ]);
    });
};

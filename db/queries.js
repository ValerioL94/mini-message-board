const pool = require('./pool');

async function getMessages() {
  const { rows } = await pool.query('SELECT * FROM messages');
  return rows;
}

async function insertMessages(username, comment) {
  await pool.query('INSERT INTO messages (username, comment) VALUES ($1, $2)', [
    username,
    comment,
  ]);
}

module.exports = {
  getMessages,
  insertMessages,
};

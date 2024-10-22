const pool = require(".pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function getMessage(id) {
  const { message } = await pool.query("SELECT * FROM messages WHERE id=$1", [
    id,
  ]);
  return message[0];
}

async function insertMessage(message) {
  await pool.query(
    "INSERT INTO messages (text, username, added) VALUES ($1, $2, $3)",
    [message.text, message.user, message.added]
  );
}

module.exports = {
  getAllMessages,
  getMessage,
  insertMessage,
};

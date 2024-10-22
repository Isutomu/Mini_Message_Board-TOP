const { Client } = require("pg");
require("dotenv").config();

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    text VARCHAR ( 1000 ),
    username VARCHAR ( 255 ),
    added TIMESTAMPTZ
);

INSERT INTO messages (text, username, added)
VALUES
    (
    text: "Hi there!",
    user: "Amando",
    added: ${new Date()}
    ),
    (
    text: "Hello World!",
    user: "Charles",
    added: ${new Date()}
    );
`;
const CONNECTION_STRING = process.argv[2];

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: CONNECTION_STRING,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();

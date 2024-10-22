const { Client } = require("pg");
const { ssl } = require("pg/lib/defaults");

const createTableSQL = `
CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    text VARCHAR ( 1000 ),
    username VARCHAR ( 255 ),
    added TIMESTAMP
);
`;
const populateTableSQL = `
INSERT INTO messages (text, username, added)
VALUES
    ('Hi there!', 'Amando', $1),
    ('Hello World!', 'Charles', $2);
`;

const CONNECTION_STRING = process.argv[2];

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: CONNECTION_STRING,
    ssl: true,
  });
  await client.connect();
  await client.query(createTableSQL);
  await client.query(populateTableSQL, [new Date(), new Date()]);
  await client.end();
  console.log("done");
}

main();

#! /usr/bin/env node

const { Client } = require('pg');
require('dotenv').config();
const { CONNECTION_STRING } = process.env;

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 ),
  comment TEXT,
  date TIMESTAMP WITH TIME ZONE DEFAULT now()
);

INSERT INTO messages (username, comment) 
VALUES
  ('Bryan', 'Hi there'),
  ('Odin', 'Hello everyone'),
  ('Damon', 'This place is nice');
`;

async function main() {
  console.log('seeding...');
  const client = new Client({
    connectionString: CONNECTION_STRING,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log('done');
}

main();

const pgp = require("pg-promise")();

// Replace the following with your own PostgreSQL connection string
const connectionString = "postgres://kaijp:postgres1@localhost:5001/mylocaldb";

const db = pgp(connectionString);

module.exports = { db };

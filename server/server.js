const express = require("express");
const app = express();
const port = process.env.PORT || 5001;

const { Pool } = require("pg");

const pool = new Pool({
  user: "password",
  host: "localhost",
  database: "mylocaldb",
  password: "password",
  port: 5432,
});

app.get("/api/data", (req, res) => {
  res.json({ message: "Hello from Express!" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

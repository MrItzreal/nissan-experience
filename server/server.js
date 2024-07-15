const express = require("express");
const app = express();
const { Pool } = require("pg");

//Set up db connection
const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
  schema: process.env.PGSCHEMA,
});

pool.query("SELECT NOW()", (err, res) => {
  if (err) {
    console.error("Error connecting to database:", err.stack);
  } else {
    console.log("Database connected successfully!", res);
  }
});


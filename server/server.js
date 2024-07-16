import express from "express";
import pg from "pg";
import dotenv from "dotenv";

const { Pool } = pg;
dotenv.config();

const { PGUSER, PGHOST, PGDATABASE, PGPASSWORD, PGPORT } = process.env;

const app = express();

async function connectToDatabase() {
  try {
    const pool = new Pool({
      user: PGUSER,
      host: PGHOST,
      database: PGDATABASE,
      password: PGPASSWORD,
      port: PGPORT,
    });

    await pool.query("SELECT NOW()");
    console.log("Database connected successfully!");
    return pool;
  } catch (err) {
    console.error("Error connecting to database:", err);
    throw err;
  }
}

(async () => {
  try {
    const pool = await connectToDatabase(); // Wait for connection before starting the server

    // GET all vehicles (with details). Below /api/vehicles code needs to be updated

    app.get("/api/vehicles", async (req, res) => {
      try {
        const result = await pool.query("SELECT * FROM vehicles");
        res.json(result.rows);
      } catch (err) {
        console.error("Error executing query:", err);
        res.status(500).send("Internal Server Error");
      }
    });

    // GET a single vehicle by ID (with details)



    const port = PGPORT || 3000; // Use port from environment variable if set
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (err) {
    // Catch errors from connectToDatabase() and prevent the server from starting
    console.error(
      "Server could not start due to database connection failure:",
      err
    );
    process.exit(1);
  }
})();

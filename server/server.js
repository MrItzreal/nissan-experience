import express from "express";
import pg from "pg";
import dotenv from "dotenv";
import process from "process";
import cors from "cors"; //Cross-Origin Resource Sharing 

const { Pool } = pg;
dotenv.config();

const { PGUSER, PGHOST, PGDATABASE, PGPASSWORD, PGPORT, DBPORT } = process.env;

const app = express();
app.use(cors());

async function connectToDatabase() {
  try {
    const pool = new Pool({
      user: PGUSER,
      host: PGHOST,
      database: PGDATABASE,
      password: PGPASSWORD,
      port: DBPORT,
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
    const pool = await connectToDatabase(); // Waits for connection before starting the server

    // GET all vehicles (with details).
    app.get("/api/vehicles", async (req, res) => {
      try {
        const allVehiclesResult = await pool.query(
          "SELECT * FROM cars_details.vehicles"
        );

        const vehicleIds = allVehiclesResult.rows.map(
          (vehicle) => vehicle.car_id
        );

        // Fetch data from other tables for each vehicle
        const vehiclesData = await Promise.all(
          vehicleIds.map(async (carId) => {
            const [
              imageData,
              performanceData,
              featuresData,
              specificationsData,
            ] = await Promise.all([
              pool.query(
                "SELECT * FROM cars_details.images WHERE car_id = $1",
                [carId]
              ),
              pool.query(
                "SELECT * FROM cars_details.performance WHERE car_id = $1",
                [carId]
              ),
              pool.query(
                "SELECT * FROM cars_details.features WHERE car_id = $1",
                [carId]
              ),
              pool.query(
                "SELECT * FROM cars_details.specifications WHERE car_id = $1",
                [carId]
              ),
            ]);

            const mainProps = allVehiclesResult.rows.find(
              (vehicle) => vehicle.car_id === carId
            );

            return {
              ...mainProps,
              id: mainProps.car_id,
              images: imageData.rows[0],
              performance: performanceData.rows[0],
              features: featuresData.rows[0],
              specifications: specificationsData.rows[0],
            };
          })
        );
        res.json(vehiclesData);
      } catch (err) {
        console.error("Error fetching vehicles:", err);
        res.status(500).send("Internal Server Error");
      }
    });

    // GET a single vehicle by ID (with details)
    app.get("/api/vehicles/:car_id", async (req, res) => {
      try {
        const carId = req.params.car_id;
        const vehicleResult = await pool.query(
          "SELECT * FROM cars_details.vehicles WHERE car_id = $1",
          [carId]
        );

        if (vehicleResult.rows.length === 0) {
          res.status(404).send("Vehicle not found");
          return;
        }

        const vehicle = vehicleResult.rows[0];
        // Fetch data from other tables for each vehicle
        const [imageData, performanceData, featuresData, specificationsData] =
          await Promise.all([
            pool.query("SELECT * FROM cars_details.images WHERE car_id = $1", [
              carId,
            ]),
            pool.query(
              "SELECT * FROM cars_details.performance WHERE car_id = $1",
              [carId]
            ),
            pool.query(
              "SELECT * FROM cars_details.features WHERE car_id = $1",
              [carId]
            ),
            pool.query(
              "SELECT * FROM cars_details.specifications WHERE car_id = $1",
              [carId]
            ),
          ]);

        res.json({
          ...vehicle,
          images: imageData.rows,
          performance: performanceData.rows,
          features: featuresData.rows,
          specifications: specificationsData.rows,
        });
      } catch (err) {
        console.error("Error fetching vehicles details:", err);
        res.status(500).send("Internal Server Error");
      }
    });

    // Server starts
    const port = PGPORT || 8000; // Use port from environment variable if set
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (err) {
    console.error(
      "Server could not start due to database connection failure:",
      err
    );
    process.exit(1);
  }
})();

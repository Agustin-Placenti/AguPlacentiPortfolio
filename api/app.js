import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import pkg from "pg";
const { Pool } = pkg;

async function connectToDatabase() {
  const connectionString =
    "postgres://default:mXbRL7fy0SzC@ep-wild-poetry-995777.us-east-1.postgres.vercel-storage.com:5432/verceldb?sslmode=require";

  const pool = new Pool({
    connectionString: connectionString,
  });

  try {
    const client = await pool.connect();
    console.log("Connected to the PostgreSQL database");

    // Perform your database operations here

    client.release();
    console.log("Disconnected from the PostgreSQL database");
  } catch (error) {
    console.error("Error connecting to the PostgreSQL database:", error);
  } finally {
    await pool.end();
  }
}

connectToDatabase();

dotenv.config();
const app = express();
app.use(cors());

app.use((req, res, next) => {
  res.set("Access-Control-Allow-Credentials", "true");
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Headers", "Content-Type");
  res.set("Access-Control-Allow-Methods", "OPTIONS,GET,PUT,POST,DELETE");
  next();
});

//fake api TODO use firebase use morgan mover lo de router a un .routes.js y crear un controller para la logica
app.get("/api/download-pdf", (req, res) => {
  const pdfPath = "./assets/resume.pdf";
  res.download(pdfPath, "resume.pdf");
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

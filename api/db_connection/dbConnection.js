import pkg from "pg";
const { Pool } = pkg;

export default async function connectToDatabase() {
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
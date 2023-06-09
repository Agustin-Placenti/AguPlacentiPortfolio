import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/routes.js"
import connectToDatabase from "./db_connection/dbConnection.js";

connectToDatabase();

dotenv.config();
const app = express();
app.use(cors());
app.use(router)

app.use((req, res, next) => {
  res.set("Access-Control-Allow-Credentials", "true");
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Headers", "Content-Type");
  res.set("Access-Control-Allow-Methods", "OPTIONS,GET,PUT,POST,DELETE");
  next();
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

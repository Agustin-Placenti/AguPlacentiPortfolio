import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();

app.use((req, res, next) => {
  res.set("Access-Control-Allow-Credentials", "true");
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Headers", "Content-Type");
  res.set("Access-Control-Allow-Methods", "OPTIONS,GET,PUT,POST,DELETE");
  next();
});

//fake api
app.get("/api/download-pdf", (req, res) => {
  const pdfPath = "./assets/resume.pdf";
  res.download(pdfPath, "resume.pdf");
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

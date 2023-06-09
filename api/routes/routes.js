import express from "express";
import { downloadPDF } from "../controllers/controllers.js";

const router = express.Router();

router.get("/api/download-pdf", downloadPDF);

export default router;
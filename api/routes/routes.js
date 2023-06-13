import express from "express";
import { downloadPDF, sendEmail } from "../controllers/controllers.js";

const router = express.Router();

router.get("/api/download-pdf", downloadPDF);
router.post("/api/send-email", sendEmail);

export default router;

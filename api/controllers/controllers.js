import { fileURLToPath } from "url";
import dotenv from "dotenv";
import { dirname, join } from "path";
import nodemailer from "nodemailer";

dotenv.config();

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
  secure: true
});

export const downloadPDF = (req, res) => {
  const currentModulePath = fileURLToPath(import.meta.url);
  const currentDirPath = dirname(currentModulePath);
  const pdfPath = join(currentDirPath, "assets", "resume2.pdf");
  res.download(pdfPath, "resume.pdf");
};

export const sendEmail = (req, res) => {
  const { emailFrom, subject, message } = req.body;

  const mailOptions = {
    from: emailFrom,
    to: process.env.MAIL_USER,
    subject: subject,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error sending E-mail:", error);
      res.status(500).send("Error sending E-mail");
    } else {
      console.log("E-mail sent:", info.response);
      res.status(200).send("E-mail sent");
    }
  });
};

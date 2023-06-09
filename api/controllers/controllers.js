import { fileURLToPath } from "url";
import { dirname, join } from "path";

export const downloadPDF = (req, res) => {
  const currentModulePath = fileURLToPath(import.meta.url);
  const currentDirPath = dirname(currentModulePath);
  const pdfPath = join(currentDirPath, "assets", "resume.pdf");
  res.download(pdfPath, "resume.pdf");
};
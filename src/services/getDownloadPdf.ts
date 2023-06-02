import { PDF_DOWNLOAD_URL } from "../utils/consts";

export default function getDownloadPdf() {
  return new Promise((resolve, reject) => {
    fetch(PDF_DOWNLOAD_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/pdf",
      },
    })
      .then((response) => response.blob())
      .then((blob) => {
        const file = new Blob([blob], { type: "application/pdf" });
        const url = window.URL.createObjectURL(file);
        const a = document.createElement("a");
        a.href = url;
        a.download = "resume.pdf";
        a.click();

        setTimeout(() => {
          window.URL.revokeObjectURL(url);
          a.remove();
          resolve(blob);
        }, 1000);
      })
      .catch((error) => {
        console.error("Error:", error);
        reject(error);
      });
  });
}
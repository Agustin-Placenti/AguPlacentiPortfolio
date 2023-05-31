import Spacer from "../../components/spacer";
import texts from "../../utils/texts.json";
import { PDF_DOWNLOAD_URL } from "../../utils/consts";
import "./resume.css";

export default function resume() {
  const handleResumeClick = () => {
    // if I had a pdf stored in a real api just use that instead of this one
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
        }, 1000);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <div className="resume-container">
        <Spacer space={130} />
        <div className="resume-button-container">
          <button className="resume-button" onClick={handleResumeClick}>
            {texts.DOWNLOAD_RESUME}
          </button>
        </div>
      </div>
    </>
  );
}

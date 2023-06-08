import Spacer from "components/spacer";
import texts from "utils/texts.json";
import getDownloadPdf from "services/getDownloadPdf";
import "./resume.css";
import { useState } from "react";

export default function Resume() {
  const errorTryLaterMsg = texts.ERRORS.TRY_LATER;
  const [errorMsg, setErrorMsg] = useState("");

  const handleResumeClick = () => {
    getDownloadPdf().catch((e: Error) => setErrorMsg(e.message));
  };

  return (
    <>
      <div className="resume-container">
        <Spacer space={130} />
        <div className="resume-button-container">
          <button className="resume-button" onClick={handleResumeClick}>
            {texts.DOWNLOAD_RESUME}
          </button>
          {errorMsg && (
            <>
              <div className="resume-download-error"> {errorMsg} </div>
              <div className="resume-download-error"> {errorTryLaterMsg} </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

import texts from "utils/texts.json";
import "./footer.css";

export default function footer() {
  return (
    <div className="footer">
      <div className="footer-text">{texts.FOOTER_TEXT}</div>
    </div>
  );
}

interface HeaderData {
  title: string;
  subtitle: string;
  description1: string;
  description2: string;
  mailTo: string;
  linkedinProfile: string;
}

type HeaderProps = {
  headerData: HeaderData;
};

export default function Header({headerData}: HeaderProps) {
  return (
    <table className={"header"}>
      <tbody>
        <tr>
          <td className="header-side-content"></td>
          <td className="header-main-content">
            <div className="header-title">{headerData.title}</div>
            <div className="header-subtitle">{headerData.subtitle}</div>
            <div className="header-description">
              {headerData.description1}
            </div>
            <div className="header-description">
              {headerData.description2}
            </div>
            <div className="header-icons">
              <a
                className="far fa-envelope mail-icon"
                href={headerData.mailTo}
                target="_blank"
                aria-label="Mail"
              ></a>
              <a
                className="fab fa-linkedin-in linkedin-icon"
                href={headerData.linkedinProfile}
                target="_blank"
                aria-label="Linkedin"
              ></a>
            </div>
          </td>
          <td className="header-side-content"></td>
        </tr>
      </tbody>
    </table>
  );
}

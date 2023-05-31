import texts from "../../utils/texts.json";
import "./nav.css";
import { useStore } from "../../store/store";
import { PORTFOLIO, RESUME } from "../../utils/consts";
import { useEffect, useState } from "react";
import MenuIcon from "../../components/menuIcon";

export default function Nav() {
  const active = useStore((state) => state.active);
  const [opacity, setOpacity] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setOpacity(window.pageYOffset !== 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`navbar ${active !== PORTFOLIO ? "layout" : ""} ${
        opacity ? "opacity" : ""
      }`}
    >
      <span className={"left-nav"}>
        <a className={"link name"} href={PORTFOLIO}>
          {texts.NAV_LEFT_NAME}
        </a>
      </span>
      <span className={"right-nav"}>
        <a
          className={`link ${active === PORTFOLIO ? "active" : ""}`}
          href={PORTFOLIO}
        >
          {texts.PORTFOLIO}
        </a>
        <a
          className={`link ${active === RESUME ? "active" : ""}`}
          href={RESUME}
        >
          {texts.RESUME}
        </a>
        <MenuIcon className={"menu-icon"} tabIndex={0}>
          asd
        </MenuIcon>
      </span>
    </div>
  );
}

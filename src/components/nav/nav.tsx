import texts from "utils/texts.json";
import "./nav.css";
import { useStore } from "store/store";
import { PORTFOLIO } from "utils/consts";
import { useEffect, useState } from "react";
import MenuIcon from "./menuIcon/menuIcon";
import NavbarLink from "./navbarLink/navbarLink";
import { navbarPages } from "utils/navbarPages";
import type { MenuStateProps } from "store/store";
import DarkModeButton from "./darkModeButton/darkModeButton";

type NavProps = {
  menuState: MenuStateProps;
};

export default function Nav({ menuState }: NavProps) {
  const active = useStore((state) => state.active);
  const [offsetVertical, setOffsetVertical] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetVertical(window.pageYOffset !== 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`navbar ${active !== PORTFOLIO ? "layout" : ""} ${
        offsetVertical ? "opacity" : ""
      }`}
    >
      <span className={"left-nav"}>
        <a className={"desktop-link name"} href={PORTFOLIO}>
          {texts.NAV_LEFT_NAME}
        </a>
        <DarkModeButton />
      </span>
      <span className={"right-nav"}>
        {navbarPages.map((page) => <NavbarLink url={page.url} text={page.text} />)}
        <MenuIcon className={"menu-icon"} tabIndex={0} menuState={menuState} />
      </span>
    </div>
  );
}

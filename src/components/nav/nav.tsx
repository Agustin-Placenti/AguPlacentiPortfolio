import texts from "utils/texts.json";
import "./nav.css";
import { useStore } from "store/store";
import { PORTFOLIO, RESUME } from "utils/consts";
import { useEffect, useState } from "react";
import MenuIcon from "components/menuIcon";
import LinkWithActive from "components/linkWithActive";
import type { MenuStateProps } from "store/store";

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
        <a className={"link name"} href={PORTFOLIO}>
          {texts.NAV_LEFT_NAME}
        </a>
      </span>
      <span className={"right-nav"}>
        <LinkWithActive
          url={PORTFOLIO}
          text={texts.PORTFOLIO}
          activeItem={active}
        />
        <LinkWithActive url={RESUME} text={texts.RESUME} activeItem={active} />
        <MenuIcon className={"menu-icon"} tabIndex={0} menuState={menuState} />
      </span>
    </div>
  );
}

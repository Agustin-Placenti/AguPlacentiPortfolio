import { useStore } from "store/store";
import { OPEN, CLOSED } from "utils/consts";
import { MenuStateProps } from "../nav";
import "./menuIcon.css"

interface MenuProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  menuState: MenuStateProps;
}

export default function MenuIcon(props: MenuProps) {
  const setMenuState = useStore((state) => state.setMenuState);
  return (
    <>
      <link
        className={`${
          props.menuState === OPEN ? "fa fa-times" : "fa fa-bars"
        } ${props?.className}`}
        tabIndex={props?.tabIndex}
        onClick={() => setMenuState(props.menuState === OPEN ? CLOSED : OPEN)}
      />
    </>
  );
}

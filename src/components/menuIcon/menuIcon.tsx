import { useStore, MenuStateProps } from "../../store/store";
import { OPEN, CLOSED } from "../../utils/consts";

interface MenuProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  menuState: MenuStateProps;
}

export default function MenuIcon(props: MenuProps) {
  const menuState = useStore((state) => state.menuState);
  const setMenuState = useStore((state) => state.setMenuState);
  return (
    <>
      <link
        className={`${
          props.menuState === OPEN ? "fa fa-times" : "fa fa-bars"
        } ${props?.className}`}
        tabIndex={props?.tabIndex}
        onClick={() => setMenuState(menuState === OPEN ? CLOSED : OPEN)}
      />
    </>
  );
}

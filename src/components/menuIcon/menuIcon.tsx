import { useStore } from "../../store/store";

interface MenuProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  openMenu: boolean;
}

export default function MenuIcon(props: MenuProps) {
  const openMenu = useStore((state) => state.openMenu);
  const setOpenMenu = useStore((state) => state.setOpenMenu);
  return (
    <>
      <link
        className={`${props.openMenu ? "fa fa-times" : "fa fa-bars"} ${props?.className}`}
        tabIndex={props?.tabIndex}
        onClick={() => setOpenMenu(!!!openMenu)}
      />
    </>
  );
}

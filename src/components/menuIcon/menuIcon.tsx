import { useState } from "react";

interface MenuProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export default function MenuIcon(props: MenuProps) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <link
        className={`fa fa-bars ${props?.className} ${open ? "open-menu" : ""}`}
        tabIndex={props?.tabIndex}
        onClick={() => setOpen((open) => !open)}
      />
      {open && props?.children}
    </>
  );
}

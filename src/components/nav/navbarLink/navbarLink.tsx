import type { navbarPagesProps } from "utils/navbarPages";
import { useStore } from "store/store";
import "./navbarLink.css";

export default function NavbarLink({ url, text }: navbarPagesProps) {
  const active = useStore((state) => state.active);

  return (
    <a className={`desktop-link ${active === url ? "active" : ""}`} href={url}>
      {text}
    </a>
  );
}

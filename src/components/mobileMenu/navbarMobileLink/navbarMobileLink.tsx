import { useStore } from "store/store";
import type { navbarPagesProps } from "utils/navbarPages";

export default function NavbarMobileLink({ url, text }: navbarPagesProps) {
  const active = useStore((state) => state.active);
  return (
    <a
      href={url}
      className={`mobile-link ${active === url ? "active" : ""}`}
    >
      {text}
    </a>
  );
}

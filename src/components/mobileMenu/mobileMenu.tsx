import { useStore } from "store/store";
import { navbarPages } from "utils/navbarPages";
import NavbarMobileLink from "./navbarMobileLink/navbarMobileLink";
import "./mobileMenu.css"

export default function MobileMenu() {
    const menuState = useStore((state) => state.menuState);
    
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleAnimationEnd(event: any) {
    if (event.animationName === "shrinkToTop") {
      event.target.classList.add("remove");
    }
  }

  return (
    <div className={menuState} onAnimationEnd={handleAnimationEnd}>
      {navbarPages.map((page, index) => <NavbarMobileLink url={page.url} text={page.text} key={index}/>)}
    </div>
  );
}
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Resume from "../src/pages/resume";
import Dashboard from "../src/pages/dashboard";
import Nav from "../src/components/nav";
import Footer from "../src/components/footer";
import { useStore } from "./store/store";
import { PORTFOLIO, RESUME } from "./utils/consts";
import texts from "./utils/texts.json";
import "./App.css";
import { useEffect } from "react";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Dashboard />} />
      <Route path="resume" element={<Resume />} />
    </Route>
  )
);

function App() {
  const active = useStore((state) => state.active);
  const setActive = useStore((state) => state.setActive);
  const openMenu = useStore((state) => state.openMenu);
  const setOpenMenu = useStore((state) => state.setOpenMenu);

  useEffect(() => {
    setActive(window.location.pathname);
    setOpenMenu(false);
  }, []);

  return (
    <>
      <div className={active === PORTFOLIO ? "portfolio-layout" : ""}>
        <Nav openMenu={openMenu}/>
      </div>
      <RouterProvider router={router} />
      <Footer />
      {openMenu && (
        <div className="open-menu">
          <a
            href={PORTFOLIO}
            className={`open-menu-item ${active === PORTFOLIO ? "active" : ""}`}
          >
            {texts.PORTFOLIO}
          </a>
          <a
            className={`open-menu-item ${active === RESUME ? "active" : ""}`}
            href={RESUME}
          >
            {texts.RESUME}
          </a>
        </div>
      )}
    </>
  );
}

export default App;

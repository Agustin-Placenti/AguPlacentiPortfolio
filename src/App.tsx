import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Resume from "./pages/resume";
import Dashboard from "./pages/dashboard";
import Nav from "./components/nav";
import Footer from "./components/footer";
import { useStore } from "./store/store";
import { PORTFOLIO, RESUME, LOADING } from "./utils/consts";
import texts from "./utils/texts.json";
import "./App.css";
import { useEffect } from "react";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path={PORTFOLIO} element={<Dashboard />} />
      <Route path={RESUME} element={<Resume />} />
    </Route>
  )
);

function App() {
  const active = useStore((state) => state.active);
  const setActive = useStore((state) => state.setActive);
  const menuState = useStore((state) => state.menuState);
  const setMenuState = useStore((state) => state.setMenuState);

  useEffect(() => {
    setActive(window.location.pathname);
    setMenuState(LOADING);
  }, []);

  //TODO move this function and its jsx element to another file
  function handleAnimationEnd(event: any) {
    if (event.animationName === "shrinkToTop") {
      event.target.classList.add("remove");
    }
  }

  return (
    <>
      <div className={active === PORTFOLIO ? "portfolio-layout" : ""}>
        <Nav menuState={menuState} />
      </div>
      <RouterProvider router={router} />
      <Footer />
      {menuState !== LOADING && (
        <div className={menuState} onAnimationEnd={handleAnimationEnd}>
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

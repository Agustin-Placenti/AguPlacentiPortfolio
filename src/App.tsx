import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Resume from "./pages/resume";
import Dashboard from "./pages/dashboard";
import Nav from "components/nav";
import Footer from "components/footer";
import { useStore } from "store/store";
import { PORTFOLIO, RESUME, LOADING } from "utils/consts";
import MobileMenu from "components/mobileMenu";
import { useEffect } from "react";
import ScrollButton from "components/scrollButton/scrollButton";
import "./App.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path={PORTFOLIO} element={<Dashboard />} />
      <Route path={RESUME} element={<Resume />} />
    </Route>
  )
);

function App() {
  const setActive = useStore((state) => state.setActive);
  const menuState = useStore((state) => state.menuState);
  const setMenuState = useStore((state) => state.setMenuState);

  useEffect(() => {
    setActive(window.location.pathname);
    setMenuState(LOADING);
  }, [setActive, setMenuState]);

  return (
    <>
      <Nav menuState={menuState} />
      <RouterProvider router={router} />
      <Footer />
      {menuState !== LOADING && <MobileMenu />}
      <ScrollButton />
    </>
  );
}

export default App;

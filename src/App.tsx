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
import { PORTFOLIO } from "./utils/consts";
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

  useEffect(() => {
    setActive(window.location.pathname);
  }, [setActive]);

  return (
    <>
      <div className={active === PORTFOLIO ? "portfolio-layout" : ""}>
        <Nav />
      </div>
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;

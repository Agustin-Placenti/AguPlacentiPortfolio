import { useStore } from "store/store";
import "./darkModeButton.css";

const DarkModeButton = () => {
  const darkMode = useStore((state) => state.darkMode);
  const setDarkMode = useStore((state) => state.setDarkMode);

  return (
    <div onClick={() => setDarkMode(!darkMode)}>
      <div className={`toggle ${darkMode ? "dark" : "light"}`}>
        <i className={`toggle-icon fas ${darkMode ? "fa-moon" : "fa-sun"}`}></i>
      </div>
    </div>
  );
};

export default DarkModeButton;

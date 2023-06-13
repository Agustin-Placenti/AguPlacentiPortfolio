import { useStore } from "store/store";
import "./darkModeButton.css";

const DarkModeButton = () => {
  const darkMode = useStore((state) => state.darkMode);
  const setDarkMode = useStore((state) => state.setDarkMode);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      setDarkMode(!darkMode);
    }
  };

  return (
    <div
      onClick={() => setDarkMode(!darkMode)}
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <div className={`toggle ${darkMode ? "dark" : "light"}`}>
        <i className={`toggle-icon fas ${darkMode ? "fa-moon" : "fa-sun"}`}></i>
      </div>
    </div>
  );
};

export default DarkModeButton;

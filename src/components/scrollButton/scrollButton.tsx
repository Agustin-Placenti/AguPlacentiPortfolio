import { useState, useEffect } from "react";
import "./scrollButton.css";

const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      scrollToTop();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsVisible(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`scroll-button ${isVisible ? "show" : ""}`}
      onClick={scrollToTop}
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <i className="fas fa-chevron-up"></i>
    </div>
  );
};

export default ScrollButton;

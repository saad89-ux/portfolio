import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const initialTheme = savedTheme || (systemPrefersDark ? "dark" : "light");

    if (initialTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }

    localStorage.setItem("theme", initialTheme);
  }, []);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);

    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <label
      className="theme-switch"
      style={{
        position: "fixed",
        top: "-8px",
        left: "1296px",
        zIndex: 9999,
        backgroundColor: "transparent",
      }}
    >
      <input type="checkbox" checked={isDarkMode} onChange={toggleTheme} />
      <span className="slider">
        <span className={`thumb ${isDarkMode ? "thumb-dark" : "thumb-light"}`}>
          <Moon className={`icon icon-moon ${isDarkMode ? "show" : "hide"}`} size={16} />
          <Sun className={`icon icon-sun ${!isDarkMode ? "show" : "hide"}`} size={16} />
        </span>
      </span>
    </label>
  );
};

export default ThemeToggle;

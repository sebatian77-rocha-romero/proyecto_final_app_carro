import { createContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode(prev => !prev);

  const theme = {
    dark: darkMode,
    colors: {
      background: darkMode ? "#0a0f1e" : "#f0f4ff",
      card: darkMode ? "#141929" : "#ffffff",
      text: darkMode ? "#e8f0ff" : "#0a0f1e",
      button: darkMode ? "#00d4ff" : "#0a0f1e",
      buttonText: darkMode ? "#0a0f1e" : "#ffffff",
      primary: darkMode ? "#00d4ff" : "#0057ff",
      accent: darkMode ? "#00ffaa" : "#0057ff",
      border: darkMode ? "#1e2d4a" : "#d0daf0",
      subtext: darkMode ? "#8899bb" : "#4a5578",
    }
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
}
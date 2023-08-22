import { createContext, useState, useEffect } from "react";

type ThemeContextType = {
  theme: "dark" | "light" | null;
  themeChangeHandler: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: null,
  themeChangeHandler: () => {},
});

type ThemeProviderProps = {
  children: React.ReactNode;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<"dark" | "light" | null>(() => {
    const storedTheme = localStorage.getItem("theme");
    return (storedTheme as "dark" | "light" | null) ?? null;
  });

  useEffect(() => {
    if (theme === null) {
      // verificar si el tema no se ha guardado previamente
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    }
  }, [theme]);

  useEffect(() => {
    const element = document.documentElement;
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const themeChangeHandler = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, themeChangeHandler }}>
      {children}
    </ThemeContext.Provider>
  );
};

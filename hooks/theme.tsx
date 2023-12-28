import React, { useEffect, useState } from "react";

export type TTheme = "dark" | "light";

const ThemeContext = React.createContext<{
  theme: TTheme;
  setTheme: (theme: TTheme) => void;
  toggleTheme: () => void;
}>({
  theme: "light",
  setTheme: () => null,
  toggleTheme: () => null,
});

const InternalThemeProvider: React.FC<{
  children: React.ReactElement[] | React.ReactElement;
  defaultTheme: TTheme;
}> = ({ children, defaultTheme }) => {
  const [currentTheme, setCurrentTheme] = useState<TTheme>(defaultTheme);

  const handleChangeTheme = (theme: TTheme) => {
    localStorage.setItem("__theme", theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      return;
    }
    document.documentElement.classList.remove("dark");
  };

  useEffect(() => {
    const isDarkMode =
      localStorage.__theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    setCurrentTheme(isDarkMode ? "dark" : "light");
  }, []);

  useEffect(() => {
    handleChangeTheme(currentTheme);
  }, [currentTheme]);

  return (
    <ThemeContext.Provider
      value={{
        theme: currentTheme,
        setTheme: setCurrentTheme,
        toggleTheme: () =>
          setCurrentTheme((pre) => (pre === "dark" ? "light" : "dark")),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

const useInternalTheme = () => React.useContext(ThemeContext);

const Theme = InternalThemeProvider as typeof InternalThemeProvider & {
  useTheme: typeof useInternalTheme;
};
Theme.useTheme = useInternalTheme;

export default Theme;

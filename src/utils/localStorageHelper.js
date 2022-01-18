export const getDarkTheme = () => {
  const isDarkMode = localStorage.getItem("darkMode");
  return isDarkMode === "true";
};

// const getDarkThemeBarry = () => localStorage.getItem("darkMode") === "true";

export const setDarkTheme = (isDarkMode) => {
  localStorage.setItem("darkMode", isDarkMode.toString());
};

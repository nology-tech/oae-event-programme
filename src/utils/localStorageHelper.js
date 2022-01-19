export const getDarkTheme = () => {
  const isDarkMode = localStorage.getItem("darkMode");
  return isDarkMode === "true";
};


export const setDarkTheme = (isDarkMode) => {
  localStorage.setItem("darkMode", isDarkMode.toString());
};

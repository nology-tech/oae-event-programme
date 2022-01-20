export const getDarkTheme = () => {
  const isDarkMode = localStorage.getItem("darkMode");
  return isDarkMode === "true";
};
// const getDarkThemeBarry = () => localStorage.getItem("darkMode") === "true";
export const setDarkTheme = (isDarkMode) => {
  console.log(isDarkMode)
  localStorage.setItem("darkMode", isDarkMode.toString());
};

export const getFontSize = () => {
  const fontSize = localStorage.getItem("fontSize");
  return fontSize;
}

export const setFontSize = (fontSize) => {
  console.log(fontSize)
  localStorage.setItem("fontSize", fontSize)
}
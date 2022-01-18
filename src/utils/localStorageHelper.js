export const getDarkTheme = () => {
  //   if (darkTheme == true) {
  //     localStorage.setItem("--background-color", darkTheme);
  //   } else {
  //     localStorage.setItem("theme", "light");
  //   }
  console.log(localStorage.getItem("darkMode"));

  // convert isDarkMode to a Boolean
  // return that boolean

  return true;
};

export const setDarkTheme = (isDarkMode) => {
  localStorage.setItem("darkMode", isDarkMode.toString());
};

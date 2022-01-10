  const getThemeChange = (theme) => {
    if (typeof theme !== "number") {
      theme = parseInt(theme);
    }
    if(theme === 1) {
      return "primary"
    } else if (theme === 2) {
      return "secondary"
    }
    return "tertiary"
  }    
export default getThemeChange;
export const getThemeType = (theme) => {
  if (typeof theme !== "number") {
    theme = parseInt(theme);
  }
  if (theme === 2) {
    return "secondary";
  } else if (theme === 3) {
    return "tertiary";
  }
  return "primary";
};

export const getFontType = (fontType) => {
  if (typeof fontType !== "number") {
    fontType = parseInt(fontType);
  }
  if (fontType === 2) {
    return "classic";
  }
  return "modern";
};

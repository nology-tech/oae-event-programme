export const getFontType = (fontType) => {
  if (typeof fontType === "string") {
    fontType = parseInt(fontType);
  }
  if (fontType === 1) {
    return "modern";
  } else if (fontType === 2) {
    return "classic";
  } else {
    return "modern";
  }
};

export default getFontType;

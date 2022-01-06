export const getFontType = (fontType) => {
  if (typeof fontType !== "number") {
    fontType = parseInt(fontType);
  }
  if (fontType === 2) {
    return "classic";
  }
  return "modern";
};

export default getFontType;

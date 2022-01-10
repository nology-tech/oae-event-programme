import { getThemeType, getFontType } from "./themeHelper";

describe("Should return a theme type", () => {
  test("Should return primary when type is 1", () => {
    const themeType = getThemeType(1);
    expect(themeType).toBe("primary");
  });
  test("Should return primary when type is 2", () => {
    const themeType = getThemeType(2);
    expect(themeType).toBe("secondary");
  });
  test("Should return primary when type is 3", () => {
    const themeType = getThemeType(3);
    expect(themeType).toBe("tertiary");
  });
  test("Should return primary when type is `1`", () => {
    const themeType = getThemeType("1");
    expect(themeType).toBe("primary");
  });
  test("should return modern when fontType is invalid", () => {
    const fontType = getThemeType("6");
    expect(fontType).toBe("primary");
  });
});
describe("should return a fontType", () => {
  test("should return modern when fontType is 1", () => {
    const fontType = getFontType(1);
    expect(fontType).toBe("modern");
  });
  test("should return classic when fontType is 2", () => {
    const fontType = getFontType(2);
    expect(fontType).toBe("classic");
  });
  test("should return modern when fontType is `1`", () => {
    const fontType = getFontType("1");
    expect(fontType).toBe("modern");
  });
  test("should return classic when fontType is `2`", () => {
    const fontType = getFontType("2");
    expect(fontType).toBe("classic");
  });
  test("should return modern when fontType is invalid", () => {
    const fontType = getFontType("4");
    expect(fontType).toBe("modern");
  });
});

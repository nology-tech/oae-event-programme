import { getFontType } from "./stringHelper";

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

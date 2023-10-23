import { test, expect, describe } from "vitest";
import formatTotalNumber from "../formatTotalNumber";

describe("testing the total number formater", () => {
  test("format 1 digit number", () => {
    expect(formatTotalNumber(1)).toBe("1");
  });

  test("format 2 digits number", () => {
    expect(formatTotalNumber(43)).toBe("43");
  });

  test("format 3 digits number", () => {
    expect(formatTotalNumber(432)).toBe("432");
  });

  test("format 4 digits number", () => {
    expect(formatTotalNumber(4329)).toBe("4,329");
  });

  test("format 5 digits number", () => {
    expect(formatTotalNumber(43295)).toBe("43,295");
  });

  test("format 6 digits number", () => {
    expect(formatTotalNumber(432958)).toBe("432,958");
  });

  test("format bigger number", () => {
    expect(formatTotalNumber(433223903)).toBe("433,223,903");
  });
});

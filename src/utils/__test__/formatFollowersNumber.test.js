import { test, expect, describe } from "vitest";
import FormatFollowersNumber from "../formatFollowersNumber";

describe("testing the folloers number formater function", () => {
  test("format 1 digit number", () => {
    expect(FormatFollowersNumber(1)).toBe("1");
  });

  test("format 4 digit number", () => {
    expect(FormatFollowersNumber(1987)).toBe("1987");
  });

  test("format 5 digit number", () => {
    expect(FormatFollowersNumber(11020)).toBe("11k");
  });

  test("format bigger number", () => {
    expect(FormatFollowersNumber(1329212)).toBe("1329k");
  });
});

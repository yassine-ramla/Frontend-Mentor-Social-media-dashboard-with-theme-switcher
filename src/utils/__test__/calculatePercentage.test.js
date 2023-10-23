import { test, expect, describe } from "vitest";
import CalculatePercentage from "../calculatePercentage";

describe("testing the the function that calculate the percentage", () => {
  test("100% increase", () => {
    expect(CalculatePercentage(2, 1)).toBe("100");
  });

  test("50% increase", () => {
    expect(CalculatePercentage(3, 2)).toBe("50");
  });

  test("50% decrease", () => {
    expect(CalculatePercentage(1, 2)).toBe("-50");
  });

  test("more than 100% increase", () => {
    expect(CalculatePercentage(52009, 3526)).toBe("1375");
  });
});

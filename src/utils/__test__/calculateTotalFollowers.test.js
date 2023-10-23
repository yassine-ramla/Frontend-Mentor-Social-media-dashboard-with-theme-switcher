import { test, expect, describe } from "vitest";
import calculateTotalFollowers from "../calculateTotalFollowers";
import data from "../../data/data.json";

describe("testing the total function", () => {
  test("calculate followers", () => {
    expect(calculateTotalFollowers(data[0])).toBe("23,004");
  });
});

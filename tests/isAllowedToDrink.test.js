import { isAllowedToDrink } from "../index.js";

describe("isAllowedToDrink", () => {
  it("should return false when age is lower than 18", () => {
    expect(isAllowedToDrink(15)).toBeFalse();
  });
  it("should return true when age is over 18", () => {
    expect(isAllowedToDrink(19)).toBeTrue();
  });
});

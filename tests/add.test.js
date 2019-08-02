import { add } from "../index.js";

describe("add", () => {
  const arrayWithNumbers = [2, 4, 5, 0];
  test("should sum all the given numbers", () => {
    const sum = add(arrayWithNumbers);
    expect(sum).toEqual(11);
  });
});

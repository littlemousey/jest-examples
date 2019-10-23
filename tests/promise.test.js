import { APICall } from "../index.js";

it("should return even when input is even", () => {
  expect(APICall(2)).resolves.toBe("even");
});

it("should return odd when input is odd", () => {
  expect(APICall(7)).rejects.toBe("odd");
});

it("async await should be possible", async () => {
  const result = await APICall(2);
  expect(result).toEqual("even");
});

it("should work as a mocked function", async () => {
  const mock = jest.mock("../index.js", () => ({
    APICall: jest.fn(() => new Promise().resolve("odd"))
  }));

  const result = await APICall(5);
  expect(result).toEqual("odd");

  mock.mockRestore();
});

it("should work as a returned promise", done => {
  return APICall(2).then(result => {
    expect(result).toEqual("even");
    done();
  });
});

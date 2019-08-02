import { APICall } from "../index.js";
import { JestEnvironment } from "@jest/environment";

it("api call", () => {
  expect(APICall(2)).resolves.toBe("even");
});

it("api call", () => {
  expect(APICall(7)).rejects.toBe("odd");
});

it("api call 2", async () => {
  const result = await APICall(2);
  expect(result).toEqual("even");
});

it("api call reject 2", async () => {
  const mock = jest.mock("../index.js", () => ({
    APICall: jest.fn(() => new Promise().resolve("odd"))
  }));

  const result = await APICall(5);
  expect(result).toEqual("odd");

  mock.mockRestore();
});

it("version 3", done => {
  return APICall(2).then(result => {
    expect(result).toEqual("even");
    done();
  });
});

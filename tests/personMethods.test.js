import { Person } from "../index.js";

describe("Person", () => {
  let oldestChild;

  beforeEach(() => {
    const middleChild = new Person({ name: "Joseph", age: 5 });
    oldestChild = new Person({
      name: "Marie",
      age: 6,
      siblings: [middleChild]
    });
  });

  describe("addSibling method", () => {
    test("should add sibling", () => {
      const newSibling = new Person({ name: "Anna", age: 4 });
      oldestChild.addSibling(newSibling);
      expect(oldestChild.siblings).toBeArrayOfSize(2);
    });
  });

  describe("removeSibling", () => {
    test("should remove one sibling", () => {
      oldestChild.removeSibling("Joseph");
      expect(oldestChild.siblings).toEqual([]);
    });
  });

  describe("hasSiblings method", () => {
    test("should return true when having siblings ", () => {
      const hasSiblings = oldestChild.hasSiblings();
      expect(hasSiblings).toBeTrue();
    });
    test("should return false when having siblings ", () => {
      oldestChild.removeSibling("Joseph");
      const hasSiblings = oldestChild.hasSiblings();
      expect(hasSiblings).toBeFalse();
    });
  });

  describe("isLonely method", () => {
    test("should call hasSiblings method when called", () => {
      const methodHasSiblings = jest.spyOn(oldestChild, "hasSiblings");
      oldestChild.isLonely();
      expect(methodHasSiblings).toHaveBeenCalled();
    });

    test("should return true when hasSiblings returns false", () => {
      jest.spyOn(oldestChild, "hasSiblings").mockReturnValue(false);
      const isLonely = oldestChild.isLonely();
      expect(isLonely).toBeTrue();
    });
  });

  describe("hasAccessToBeer method", () => {
    test("should return true when Person is older than 18", () => {
      const imaginaryPerson = new Person({ name: "Harold", age: 21 });
      const hasAccessToBeer = imaginaryPerson.hasAccessToBeer();
      expect(hasAccessToBeer).toBeTrue();
    });
    test("should call method hasOlderSiblingOfLegalDrinkingAge when Person is younger than 18", () => {
      const methodHasOlderSiblingOfLegalDrinkingAge = jest.spyOn(
        oldestChild,
        "hasOlderSiblingOfLegalDrinkingAge"
      );
      oldestChild.hasAccessToBeer();
      expect(methodHasOlderSiblingOfLegalDrinkingAge).toBeCalled();
    });
  });

  describe("hasOlderSiblingOfLegalDrinkingAge method", () => {
    test("isLonely method should be called", () => {
      const methodIsLonely = jest.spyOn(oldestChild, "isLonely");
      oldestChild.hasOlderSiblingOfLegalDrinkingAge();
      expect(methodIsLonely).toBeCalled();
    });

    test("isLonely method should be called", () => {
      const kidWithOlderSister = new Person({
        name: "Ariana",
        age: 12,
        siblings: [{ name: "Jesse", age: 25 }]
      });
      jest.spyOn(kidWithOlderSister, "isLonely").mockReturnValue(false);
      const hasAccessToBeer = kidWithOlderSister.hasOlderSiblingOfLegalDrinkingAge();
      expect(hasAccessToBeer).toBeTrue();
    });
  });
});

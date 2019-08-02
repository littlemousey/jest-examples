export function add(listOfNumbers) {
  return listOfNumbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });
}

export function isAllowedToDrink(age) {
  return age > 17 ? true : false;
}

export class Person {
  constructor(options) {
    this.name = options.name;
    this.age = options.age;
    this.siblings = options.siblings || [];
  }
  addSibling(sibling) {
    if (!(sibling instanceof Person)) {
      throw new Error("Sibling must be a valid Person object!");
    }
    this.siblings.push(sibling);
  }
  removeSibling(name) {
    this.siblings = this.siblings.filter(sibling => {
      return sibling.getName().toLowerCase() !== name.toLowerCase();
    });
  }
  isLonely() {
    return !this.hasSiblings();
  }
  hasSiblings() {
    return !!this.siblings.length;
  }
  hasOlderSiblingOfLegalDrinkingAge() {
    if (this.isLonely()) {
      return false;
    } else {
      return this.siblings.filter(sibling => sibling.age > 18).length > 0;
    }
  }
  hasAccessToBeer() {
    if (this.age > 18) {
      return true;
    } else {
      return this.hasOlderSiblingOfLegalDrinkingAge();
    }
  }
  setName(name) {
    this.name = name ? name : this.name;
  }
  setAge(age) {
    this.age = age > 0 ? age : this.age;
  }
  getName() {
    return this.name;
  }
}

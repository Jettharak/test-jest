const sum = require("../src/sum");

test("TC1: adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("TC2: adds 3 + 5 to equal 8", () => {
  expect(sum(3, 5)).toBe(8);
});

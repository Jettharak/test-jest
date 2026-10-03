const TriangleCalculator = require("../src/triangle");

describe("TriangleCalculator", () => {
  describe("integer validation", () => {
    test.each([
      ["a", "not-a-number", 2, 2],
      ["b", 2, "not-a-number", 2],
      ["c", 2, 2, "not-a-number"],
    ])("rejects a non-integer value for %s", (_side, a, b, c) => {
      expect(TriangleCalculator(a, b, c)).toBe("Value is not an integer");
    });

    test("rejects a decimal value", () => {
      expect(TriangleCalculator(2.5, 2, 2)).toBe("Value is not an integer");
    });
  });

  describe("range validation", () => {
    test.each([
      ["a below range", 0, 2, 2],
      ["a above range", 201, 2, 2],
      ["b below range", 2, 0, 2],
      ["b above range", 2, 201, 2],
      ["c below range", 2, 2, 0],
      ["c above range", 2, 2, 201],
    ])("rejects %s", (_case, a, b, c) => {
      expect(TriangleCalculator(a, b, c)).toBe("Value is out of range");
    });
  });

  describe("triangle inequality", () => {
    test.each([
      ["a + b is not greater than c", 1, 2, 3],
      ["a + c is not greater than b", 2, 3, 1],
      ["b + c is not greater than a", 3, 1, 2],
    ])("rejects a triangle when %s", (_case, a, b, c) => {
      expect(TriangleCalculator(a, b, c)).toBe("Not a triangle");
    });
  });

  describe("triangle classification", () => {
    test("classifies an equilateral triangle", () => {
      expect(TriangleCalculator(100, 100, 100)).toBe("Equilateral");
    });

    test.each([
      ["a equals b", 2, 2, 3],
      ["a equals c", 3, 2, 3],
      ["b equals c", 2, 3, 3],
    ])("classifies an isosceles triangle when %s", (_case, a, b, c) => {
      expect(TriangleCalculator(a, b, c)).toBe("Isosceles");
    });

    test("classifies a scalene triangle", () => {
      expect(TriangleCalculator(4, 5, 6)).toBe("Scalene");
    });
  });
});

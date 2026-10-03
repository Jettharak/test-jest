function TriangleCalculator(a, b, c) {
  a = parseFloat(a);
  b = parseFloat(b);
  c = parseFloat(c);
  let output;

  if (!Number.isInteger(a) || !Number.isInteger(b) || !Number.isInteger(c)) {
    return "Value is not an integer";
  } else if (a <= 0 || a > 200 || b <= 0 || b > 200 || c <= 0 || c > 200) {
    return "Value is out of range";
  }
  if (a + b <= c || a + c <= b || b + c <= a) {
    output = "Not a triangle";
  }
  //Check type
  else if (a == b && b == c) {
    output = "Equilateral";
  } else if (a == b || a == c || b == c) {
    output = "Isosceles";
  } else {
    output = "Scalene";
  }
  return output;
}

module.exports = TriangleCalculator;

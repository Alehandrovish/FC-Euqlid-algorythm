"use strict";

function euqlid(a, b) {
  try {
    if (
      typeof a !== "number" ||
      typeof b !== "number" ||
      !Number.isFinite(a) ||
      !Number.isFinite(b)
    ) {
      throw new Error("a and b must be finite numbers");
    }
    if (a <= 0 || b <= 0) throw new Error("a or b below or equal zero");
    if (a === b) return a; // as NOD
    if (a < b) {
      [b, a] = [a, b];
    }
    const rest = a % b;
    return rest === 0 ? b : euqlid(rest, b);
  } catch (err) {
    return err.message;
  }
}

console.log(euqlid(18, 48)); //48, 18 = 6, 56, 98 = 14, 105, 252 = 21, -5, 6 = error, "a", 18 = error, 0, 5 = error, Infinity, 3 = error, 5, NaN = error

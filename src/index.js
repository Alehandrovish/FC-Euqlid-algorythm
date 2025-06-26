"use strict";

function euqlid(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("a or b is not a number");
  }
  if (a < 0 || b < 0) throw new Error("a or b below zero");
  const smallest = a < b ? a : b;
  const biggest = smallest !== a ? a : b;
  const rest = biggest % smallest;
  return rest === 0 ? smallest : euqlid(rest, smallest);
}
try {
  console.log(`NOD: ${euqlid(48, 18)}`); //48, 18 = 6; 56, 98 = 14; 105, 252 = 21, -5, 6 = error; 5, -6 = error;
} catch (error) {
  console.error("Error:", error.message);
}

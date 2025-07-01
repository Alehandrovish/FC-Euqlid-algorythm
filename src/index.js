"use strict";

function euqlid(a, b) {
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
  let smallest = a < b ? a : b;
  let biggest = smallest === b ? a : b;
  let rest;
  while (smallest !== 0) {
    rest = biggest % smallest;
    biggest = smallest;
    smallest = rest;
  }

  return biggest;
}

const testCases = [
  [48, 18],
  [56, 98],
  [105, 252],
  [-5, 6],
  ["a", 18],
  [0, 5],
  [Infinity, 3],
  [5, NaN],
];

for (const [a, b] of testCases) {
  try {
    console.log(`NOD(${a}, ${b}) = ${euqlid(a, b)}`);
  } catch (error) {
    console.error(`Помилка для (${a}, ${b}): ${error.message}`);
  }
}

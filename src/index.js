"use strict";

function euqlid(a, b) {
  if (a < 0 || b < 0) throw new Error("a or b below zero");
  const smollest = a < b ? a : b;
  const biggest = smollest !== a ? a : b;
  const rest = biggest % smollest;
  return rest === 0 ? smollest : euqlid(rest, smollest);
}
console.log(`NOD: ${euqlid(48, 18)}`); //48, 18 = 6; 56, 98 = 14; 105, 252 = 21, -5, 6 = error; 5, -6 = error;

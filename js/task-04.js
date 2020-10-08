const countTotalSalary = function (employees) {
  "use strict";
  // Write code under this line
  let finishSalary = 0;
  for (const key in employees) {
    finishSalary += employees[key];
  }
  return finishSalary;
};

// Объекты и ожидаемый результат
const developers = {
  mango: 300,
  poly: 250,
  alfred: 450,
};
console.log(countTotalSalary(developers));
// 1000

const supports = {
  kiwi: 200,
  lux: 150,
  chelsy: 150,
};
console.log(countTotalSalary(supports));
// 500

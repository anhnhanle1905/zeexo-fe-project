//sort : su dung de sap xep 1 mang[]

let numbers = [1, 2, 5, 4, 3, 11, 12, 10];

//sap xep tang dan
const sortedNumbers1 = numbers.sort((a, b) => {
  return a - b;
});
console.log(sortedNumbers1);

//sap xep giam dan
const sortedNumbers2 = numbers.sort((a, b) => {
  return b - a;
});
console.log(sortedNumbers2);

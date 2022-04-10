//cach 1: su dung "function declaration"
//hinh dung duoc function khi goi

// function printTo(n) {
//   for (let i = 1; i <= n; i++) {
//     console.log(i); 
//   }
// }
// printTo(11);

//cach 2: su dung "function expression"
// su dung 1 bien de luu function

// let addTwoNumbers = function (a, b) {
//   console.log(a+b);
// };

//cach 3:su dung "arrow function"
//giong cach 2, tuy nhien se su dung dau "=>"

// let addTwoNumbers = (a, b) => {
//   console.log(a+b);
// };

//bt 1:
//dinh nghia 1 function nhap 2 tham so (a, b)
//kiem tra a co lon hon b hay khong 
//neu lon hon: tra ve true
//neu nho hon; tra ve false
// let a = 3;
// let b = 5;
// let inputTwoNumbers = (a, b) => {
//   if (a > b) {
//     return true;
//   }
//   else {
//     return false;
//   }
// }; 

// if (inputTwoNumbers(a, b) === true) {
//   console.log("True");
// } else {
//   console.log("False");
// }

//viet function kiem tra so n co chia het cho 4 va 6 hay khong

// let checkNumbers = (n) => {
//   if (n%4 === 0 && n%6 === 0) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }

// checkNumbers(8);

//viet function in ra nhung so co the chia het cho 3 va 5 hay khong
//1->n

let checkNumbers = (n) => {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(i)
    }   
  }
};

checkNumbers(100);
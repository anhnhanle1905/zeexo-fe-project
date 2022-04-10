// //Math trong JS

// //tim so lon nhat
// console.log(Math.max(1, 8, 5, 7, 8));

// //tim so nho nhat
// console.log(Math.min(1, 1, 5, 7, 8));

// // lam tron xuong
// console.log(Math.floor(3.9));

// //lam tron len
// console.log(Math.ceil(3.9));

// //lam tron gan nhat
// console.log(Math.round(3.3));
// console.log(Math.round(3.6));
// console.log(Math.round(3.5));

// //random 1 so thuc tu 0-1 (khong bao gom so 1)

// console.log(Math.floor(Math.random() * 3));

//bài 1
let randomNumbers = (a,b) => {
  if (a<b) {
    console.log(Math.floor(a + Math.random() * (b-a+1)));
  } else {
    console.log(Math.floor((a+1) + Math.random() * (b-a-1)));
  }
}
randomNumbers(10,8);

// //bài 2
// let stringLen = (str) => {
//   console.log("Length of string is " + str.length);
// }
// stringLen("hellobaby");

// //bài 3
// let maxNumber = (a, b, c) => {
//   let max = Math.max(a, b, c);
//   console.log(max);
// }
// maxNumber(1, 1, 5);

// // bài 4
// let beautifulNumber = (number) => {
//   number = number +"";
//   for (let i = 0; i < number.length-1; i++) {
//     for (let j = i+1; j < number.length; j++) {
//       if (number[i] === number[j]) {
//         return false;
//       }
//     }
//   }
//   return true;
// }






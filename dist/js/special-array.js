// /*
// Xác định input có phải là 1 "special array" hay không
// "special array" được định nghĩa là:
// + giá trị tại vị trí index chẳn sẽ là số chẳn
// + giá trị tại vị trí index lẽ sẽ là số lẽ
// */
// function solution(input) {
//   let kt = false;
//   for (let i = 0; i < input.length; i++) {
//     if (input[i] > 0) {
//       if (i % 2 === 0) {
//         if (input[i] % 2 === 0) {
//           kt = true;
//         }
//         else {
//           kt = false;
//           break;
//         }
//       } 
//       else {
//         if (input[i] % 2 === 0) {
//           kt = false;
//           break;
//         } 
//         else {
//           kt = true;
//         }
//       }
//     }
//     else {
//       kt = false;
//       break;
//     } 
//   }
//   return kt;
// }


// console.log(solution([2,-7,4,9,-6,-1,6,3]));


// //cach 2 (cach hay hon)
// function solution(input) {
// if(input.length === 0){
//   return false;
// }
//   let newArr = input.map((val,index)=>{
//     if(val < 0){
//       return false;
//     }
//         return ((val + index) % 2 === 0);
//     });
//     let newArr2 = newArr.filter((val,index)=>{
//         return val === false;
//     });
//     if(newArr2.length === 0){
//         return true;
//     }
//     return false;
//   }

//   console.log(solution([2,-7,4,9,-6,-1,6,3]));
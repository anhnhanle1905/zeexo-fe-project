// let numbers = [1,2,3,4,5];
// // tinh do dai array
// console.log(numbers.length);

// //toString(): noi cac phan tu trong mang bang dau " , " -> tra ve string
// console.log(numbers.toString());

// //join(seperator): noi cac pt trong mang bang dau seperator
// console.log(numbers.join("-"));

// // push() : them 1 pt vao cuoi mang
// console.log(numbers.push("hello"));
// console.log(numbers);

// //pop() : lay 1 pt o cuoi mang, tra ve gia tri cua pt do
// console.log(numbers.pop());
// console.log(numbers);

// //shift : xoa 1 pt dau mang va tra ve gia tri do
// console.log(numbers.shift());
// console.log(numbers);

// //unshift : them 1 pt dau mang va tra ve do dai cua mang do
// console.log(numbers.unshift("hello"));
// console.log(numbers);

// //slice(start, end) : cat 1 mang o vi tri start -> end(khong lay end)
// //vd slice(1, 3) -> lay vi tri 1, 2

// let numbers = ["samsung", "apple", "viettel", "highland"];


// //slice(start) -> cat tu vi tri index start -> cuoi mang

// //lay 2 phan tu cuoi
// let a = numbers.slice(-2);


// //lay ra phan tu giua mang
// //2 TH: - mang co length chan -> in ra 2 pt o giua
// //      - mang co length le -> in ra 1 pt o giua
// let arr = ["samsung", "apple", "viettel", "highland"];
// let arr2 = ["samsung", "apple", "viettel", "highland", "hehe"];
// let midArr = (str) => {
//   let a;
//   if (str.length % 2 === 0) {
//     a = str.slice(str.length/2 - 1, str.length/2 + 1);
//   } else {
//     a = str.slice(str.length/2, str.length/2 + 1);
//   } 
//   console.log(a);
// }
// midArr(arr);


// //splice : them, xoa phan tu trong mang 
// let arr = ["samsung", "apple", "hello", "highland"];
// splice(start, delete, add);
// delete: so phan tu muon delete

// console.log(arr.splice(2, 0, "name"));
// console.log(arr);

// //them 1 phan tu vao truoc phan tu cuoi cung cua mang
// console.log(arr.splice(-1, 0, "hihi"));
// console.log(arr);


// // ------- định dạng time ---------
// const changeTime = (time) => {
//   let arrayTime = [];
//   for (let i = 0; i < time.length; i++) {
//     arrayTime.push(time[i]);
//   }  
//   if (time.length === 7) {
//     arrayTime.splice(0, 0, "0");
//   }
//   return arrayTime.join('');
// }
// console.log(changeTime("5:30:00"));
// console.log(changeTime("15:20:00"));
// console.log(changeTime("7:10:00"));

// // ------------------------
// // viết function removeDuplicate để xoá các phần tử bị trùng trong mảng
// removeDuplicate([1,1,2,2,3,3]) // [1,2,3]
// removeDuplicate([1,2,3,4]) // [1,2,3,4]
// let removeDuplicate = (arr) => {
//   for (let i = 1; i < arr.length; i++) {
//     for (let j = i-1; j >= 0; j--) {
//       if (arr[i] === arr[j]) {
//         arr.splice(i, 1);
//         i--;
//       }
//     }
//   }
//   console.log(arr);
// }
// removeDuplicate([1,1,2,2,3,3,4,4,4,4,4,4,4,4,4,2,5,5,5]);
// removeDuplicate([1,2,3]); 
    


// //map
// let products = ["apple", "viettel","samsung", "sony"];

// // //tham so cua phuong thuc .map() la 1 function
// // //map tra ve 1 mang moi co do dai bang mang cu
// // //gia tri nam sau return se duoc pusn vao mang moi

// let newProducts = products.map((val, index) => {
//   console.log(`${index}-${val}`);
//   return val.length > 5;
// });
// console.log(newProducts);


// // filter
// //tra ve mang moi gom nhung phan tu val => thoa man dieu kien sau return
// let numbers = [1, 2, 3, 5, 10];

// const newArr = numbers.filter((val, index) => {
//   return val > 4;
// });

// console.log(newArr);

// //bt: in ra mang moi, gom nhung phan tu co do dai > 5
// let products = ["apple", "viettel","samsung", "sony"];

// let newArr = products.filter((val, index) => {
//   return val.length > 5;
// });

// console.log(newArr);

// //includes : co phan biet chu hoa va chu thuong
// let name = "maria ozaha";
// console.log(name.includes("a"));


// //bt: in ra nhung san pham co chua chu "e" va do dai > 5
// let products = ["apple", "viettel","samsung", "sony"];
// const newArr = products.filter((val, index)=> {
//   return (val.includes("e") && val.length > 5);
// });
// console.log(newArr);



  


// reduce 
//nhan hai tham so : function, gia tri khoi tao (initialValue)

//cach hoat dong:
//- kiem tra co gia tri initialValue 
//---Nếu không: acc = array[0], val = array[1] ở vòng lặp đầu tiên 
//---Nếu có: acc = initialValue, val = array[0] : ở vòng lặp đầu tiên

// let numbers = [1, 2, 3, 4, 5];
// let total = numbers.reduce((acc, val, index) => {
//   return acc + val;
// });

// { không có initialValue
//vòng lặp 1: acc=1, val=2, sau khi return thì acc = 1 + 2 = 3 
//vòng lặp 2: acc=3, val=3, acc=6
//vòng lặp 3: acc=6, val=4, acc=10
//vòng lặp 4: acc=10, val=5, acc=15 
// } 


// let total = numbers.reduce((acc, val, index) => {
//   return acc + val;
// }, 10);
// console.log(total);
// {có initialValue
//vòng lặp 1: acc = 10, val = 1, acc=11
//...tương tự
//}

// let products = [
//   {
//     name: "Sinh To",
//     price: 100,
//   },
//   {
//     name: "Bia",
//     price: 10,
//   },
//   {
//     name: "Banh Mi",
//     price: 3,
//   },
// ];

// let total = products.reduce((acc, val, index) => {
//   return acc + val.price;
// }, 0);

// console.log(total);


// function solution(input){
//   let totalBudget = input.reduce((acc, val, index) => {
//     if (val.budget == undefined ) {
//       val.budget = 0;
//     } 
//     return acc + val.budget;
//   }, 0);
//   return totalBudget;
// };
    
// console.log(solution([{"name":"Steve","budget":32000},{"name":"Martin","budget":1600},{"name":"John"}]
// ));



// hai cach de them phan tu vao object

// let user = {
//   name: "hello",
// }

// user.age = 18 //them phan tu age: 18 vao object
// //hoac
// user["gender"] = "male"; // them phan tu gender: "male" vao object

// // Kiem tra 1 key co trong object
// console.log("name" in user);  //neu co key trong object thi tra ve gia tri true
// console.log("hahahihi" in user);  //neu khong co key trong object thi tra ve gia tri false


//bai 5 tren toihocweb
// [2,4,7,8,5,5,5,4,2]
let count = input.reduce((acc,val,index)=>{
  if(val in acc){
    acc[val]++; // <==> acc[val] = acc[val] + 1;

  }
  else{
    acc[val] = 1; // them phan tu val(gia tri) : 1 vao object acc( la {} )
  }
  return acc;
}, 
{});
return count;

//bai 5 hoan chinh
function solution(input){
  /*
  Tính số lần xuất hiện của các phần tử trong mảng
  Xuất dữ liệu thành 1 object
  Ví dụ: input = [2,4,6,4,4] -> output = {"2": 1, "4": 3, "6":1}
  */
  let appearNum = input.reduce((acc, val, index)=> {
    if (val in acc) {
      acc[val]++;
    } else {
      acc[val] = 1;
    }
    return acc;
  }, {}); 
  return appearNum;
}

console.log(solution([2,4,7,"8",5,"5",5,4,"2"]));




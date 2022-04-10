//destructuring
let {name, age} = user;
//-> name, age: user1 va 20



let user = {
  name: "user1", 
  age: 20,
  gender : "male",
  isActice: false,
};
// in ra: user 1 is 20, gender is male, status is not active

let {name, age, gender, isActive} = user;

console.log(`user 1 is ${age}, gender is ${gender}, status is ${isActive ? "active" : "not active"}`);

//isActive ? "active" : "not active"
/* 
    ? là if
    : là else 
*/ 
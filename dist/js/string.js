let str = "hello baby";
// let str2 = "MARIA";

// console.log(str.repeat(2));

//.repeat(n) -> lap lai string n lan

// console.log(str.toUpperCase()); //in hoa 1 string
// console.log(str2.toLowerCase()); // in thuong 1 string

console.log(str.split(" ")); //tach string dua vao ki tu (seperator), tra ve 1 mang

//bên Console ở web in số có màu tím, còn in string có màu trắng

let initialString = "hello baby kute bbb";
let changeStr = (str) =>{
  let newStr = "";
  for(let i of str) {
    if (i === "b") {
      newStr += i.replace(i, "+");
    } else newStr += i;
  }
  return newStr;
}
// thay the tat ca chu "b" thanh dau "+""
console.log(changeStr(initialString));












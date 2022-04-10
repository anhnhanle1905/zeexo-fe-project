function solution(input){
  /*
  Xác định input có phải là 1 "special array" hay không
  "special array" được định nghĩa là:
  + giá trị tại vị trí index chẳn sẽ là số chẳn
  + giá trị tại vị trí index lẽ sẽ là số lẽ
  */
 let checkArr=[];
 let falseArr=[];
  if (input.length === 0) {
    return false;
  }
  else {
    checkArr = input.map((val, index) => {
      if (val < 0) {
        return false;
      }
      else {
        if (val % 2 === 0 && index % 2 !== 0) {
          return false;
        }
        else if(val % 2 !== 0 && index % 2 === 0) {
          return false;
        }
      }
      return true;
    });
  }
  falseArr = checkArr.filter((val, index) => {
    return val === false;
  });
  if (falseArr.length === 0) {
    return true;
  }
  return false;
}
console.log(solution([-2]));
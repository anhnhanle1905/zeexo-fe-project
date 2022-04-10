function solution(input){
  /*
  Xác định input có phải là 1 "special array" hay không
  "special array" được định nghĩa là:
  + giá trị tại vị trí index chẳn sẽ là số chẳn
  + giá trị tại vị trí index lẽ sẽ là số lẽ
  */
  if (input.length === 0) {
    return false;
  }
  else {
    
    let newArr = input.map((val, index) => {
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
    });
  }
  return true;
}

console.log([1,2,3,4,5]);
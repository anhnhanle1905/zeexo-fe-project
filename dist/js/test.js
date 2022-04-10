function solution(input){
  /*
  Loại bỏ các phần tử trùng trong mảng
  */
  return input.filter((val, index) => {
    return input.indexOf(val) === index;
  })
}

console.log(solution([1,2,3.2,4,5,6,2,3]));

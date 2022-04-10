// Bài 2: Kiểm tra trong mảng có tồn tại 3 số 1 liên tiếp hay không? (Tim hieu them break trong vong lap)
// 	- Ex: let arr = [0, 0, 1, 1, 1, 0, 1, 1, 0, 1]; // true
// 	- Ex: let arr = [0, 0, 1, 1, 0, 0, 1]; // false
let arr = [0, 0, 1, 1, 1, 0, 1, 1, 0, 1];
let count = 0;
for (let i = 0; i< arr.length; i++) {
  if (arr[i] === 1) {
    count++;
  }
  else {
    count = 0;
  }
  if (count === 3) {
    break;
  }
}
if (count === 3) {
  console.log("True");
} else {
  console.log("False");
}
  
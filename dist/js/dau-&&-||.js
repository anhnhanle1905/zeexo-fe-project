//&&: kiểm tra vế trái có false hay không
//nếu false: trả về vế trái
//nếu true: trả về vế phải

// hoặc có thể hiểu:

//&&: cả 2 vế đều true thì chạy ( chạy vế phải )

//vd:
const statement = 0 && 1;
console.log(statement);
//trả về vế trái do vế trái false
const statement2 = 3 && 7;
console.log(statement2);
//trả về vế phải


//||: kiểm tra vế trái có true hay không
//nếu true: trả về vế trái
//nếu false: trả về vế phải

const statement3 = 0 || 1;
console.log(statement3);
//trả về vế phải
const statement4 = 4 || 1;
console.log(statement4);
//trả về vế trái


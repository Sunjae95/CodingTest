const fs = require("fs");
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const input = fs.readFileSync("input").toString().split("\r\n"); //콘솔입력

const N = Number(input[0]);
const arr = input[1].split(" ").map((element) => Number(element));
const Fa = new Array(1000001).fill(0);
const NGF = new Array(N).fill(-1);

//F(A[i]) 구하기
arr.forEach((element) => {
  Fa[element]++;
});

const stack = [];

console.log(NGF.join(" "));

// arr.forEach((element, index) => {
//   for (let i = index; i <= Number(N); i++) {
//     if (Fa[element] < Fa[arr[i]]) {
//       NGF[index] = Number(arr[i]);
//       break;
//     }
//   }
// });

//시간 초과

const fs = require("fs");
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = fs.readFileSync("input").toString().split("\r\n"); //콘솔입력
//입력
// const arr = [];
// for (let i = 1; i < input.length; i++) {
//   const tmp = input[i].split(" ").map((v) => parseInt(v));
//   arr.push(tmp);
// }
// // 분할
// function mergeSort(arr) {
//   //재귀 종료 조건
//   if (arr.length < 2) {
//     return arr;
//   }
//   const mid = Math.floor(arr.length / 2);

//   const left = arr.slice(0, mid);
//   const right = arr.slice(mid);

//   return merge(mergeSort(left), mergeSort(right));
// }

// // 병합
// function merge(left, right) {
//   const result = [];
//   let leftIndex = 0;
//   let rightIndex = 0;
//   //비교하고 result에 순서대로 넣기
//   while (leftIndex < left.length && rightIndex < right.length) {
//     if (left[leftIndex][0] <= right[rightIndex][0]) {
//       //x좌표 같고 y좌표가 작을때
//       if (left[leftIndex][1] < right[rightIndex][1]) {
//         result.push(left[leftIndex]);
//         leftIndex++;
//       } else {
//         result.push(right[rightIndex]);
//         rightIndex++;
//       }
//     } else {
//       result.push(right[rightIndex]);
//       rightIndex++;
//     }
//   }
//   //왼쪽오른쪽 둘중하나가 소진되면 다른 한쪽도 result에 채워넣어야됨
//   return result.concat(left.slice(leftIndex), right.slice(rightIndex));
// }
// //출력하는데 시간이 N만큼소비
// const answer = mergeSort(arr);
// for (let i = 0; i < answer.length; i++) {
//   console.log(answer[i][0], answer[i][1]);
// }

// api사용해서 풀이 실패..!
// let arr = [];
// for (let i = 1; i < input.length; i++) {
//   const tmp = input[i].split(" ").map((v) => parseInt(v));
//   arr.push(tmp);
// }
// arr = arr.sort((a, b) => {
//   if (a[0] === b[0]) {
//     return a[1] - b[1];
//   }
//   return a[0] - b[0];
// });
// arr.forEach((i) => {
//   console.log(i[0], i[1]);
// });
input.shift();
const arr = input.map((i)=> i.split(' ').map(j=> parseInt(j)));
let result = '';
arr.sort((a, b) => {
  if (a[0] === b[0]) {
    return a[1] - b[1];
  }
  return a[0] - b[0];
}).forEach((i) => {
  result += `${i[0]} ${i[1]}\n`
});

console.log(result);

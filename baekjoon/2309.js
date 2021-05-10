const fs = require("fs");
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const input = fs.readFileSync("input").toString().split("\r\n"); //콘솔입력
const arr = input.map((i) => parseInt(i)).sort((a, b) => a - b);
const sum = arr.reduce((pre, cur) => {
  return pre + cur;
}, 0);
let result = [];
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (i === j) continue;
    if (sum - arr[i] - arr[j] === 100) {
      result = arr.filter((num) => arr[i] !== num && arr[j] !== num);
      break;
    }
  }
}
result.forEach((i) => console.log(i));

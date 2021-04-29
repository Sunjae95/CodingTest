const fs = require("fs");
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const input = fs.readFileSync("input").toString().split("\r\n"); //콘솔입력

const N = Number(input.shift());
const table = input
  .map((t) => t.split(" ").map((t) => Number(t)))
  .sort((a, b) => {
    if (a[1] !== b[1]) {
      return a[1] - b[1];
    } else {
      return a[0] - b[0];
    }
  });
console.log(table);

let last = 0;
const count = table.reduce((pre, cur) => {
  if (cur[0] >= last) {
    last = cur[1];
    return pre + 1;
  }
  return pre;
}, 0);
console.log(count);

//정렬하는것이 중요!
//끝나는시간이 같지 않으면 더 빠른시간이 앞으로 / 같다면 시작시간이 짧은것이 더 앞으로

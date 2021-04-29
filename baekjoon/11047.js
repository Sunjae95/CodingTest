const fs = require("fs");
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const input = fs.readFileSync("input").toString().split("\r\n"); //콘솔입력

let [N, K] = input
  .shift()
  .split(" ")
  .map((i) => Number(i));

const coin = input.map((i) => Number(i));

let count = 0;

for (let i = N - 1; i >= 0; i--) {
  if (K >= coin[i]) {
    count += parseInt(K / coin[i]);
    K %= coin[i];
  }
  if (K === 0) break;
}

console.log(count);

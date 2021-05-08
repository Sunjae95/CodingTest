const fs = require("fs");
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');
let [n, ...input] = fs.readFileSync("input").toString().split("\r\n"); //콘솔입력
// n명 명단 만들기
input = input.map((v) => {
  const [x, y] = v.split(" ");
  return [+x, +y];
});

const result = [];
for (let i = 0; i < input.length; i++) {
  let rank = 1;
  for (let j = 0; j < input.length; j++) {
    if (i === j) continue;
    if (input[i][0] < input[j][0] && input[i][1] < input[j][1]) {
      rank++;
    }
  }
  result.push(rank);
}
console.log(result.join(' '));

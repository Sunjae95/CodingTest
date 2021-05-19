const fs = require("fs");
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const input = parseInt(fs.readFileSync("input").toString()); //콘솔입력

let count = 0;
let result = "";
function hanoi(n, start, mid, end) {
  if (n === 1) {
    count++;
    result += `${start} ${end}\n`;
    return;
  }
  //A->B
  hanoi(n - 1, start, end, mid);
  count++;
  result += `${start} ${end}\n`;
  //B->C
  hanoi(n - 1, mid, start, end);
}

hanoi(input, 1, 2, 3);
console.log(count);
console.log(result.slice(0, result.length - 1));

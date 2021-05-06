const fs = require("fs");
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const input = parseInt(fs.readFileSync("input").toString()); //콘솔입력

function hanoi(n, start, mid, end) {
  if (n === 1) {
    console.log(start, end);
    return;
  }
  //A->B
  hanoi(n - 1, start, end, mid);
  console.log(start, end);
  //B->C
  hanoi(n - 1, mid, start, end);
}

hanoi(input, 1, 2, 3);

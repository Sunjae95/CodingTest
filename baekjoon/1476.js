const fs = require("fs");
const input = fs.readFileSync("input").toString().split("\r\n"); //콘솔입력
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

// 1<= E <=15  /  1<= S <=28  / 1<= M <=19
let [earth, sun, moon] = input[0].split(" ").map((index) => Number(index));

function year(E, S, M) {
  let count = 1;
  while (E !== 1 || S !== 1 || M !== 1) {
    if (E !== 1) {
      while (E !== 1) {
        E--;
        S--;
        M--;
        if (S === 0) {
          S = 28;
        }
        if (M === 0) {
          M = 19;
        }
        count++;
      }
    }
    S -= 15;
    M -= 15;
    if (S < 1) {
      S = 28 + S;
    }
    if (M < 1) {
      M = 19 + M;
    }
    count += 15;
  }
  return count;
}
console.log(year(earth, sun, moon));

const fs = require("fs");
const input = fs.readFileSync("input").toString().split("\r\n"); //콘솔입력
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

// 1<= E <=15  /  1<= S <=28  / 1<= M <=19
let [earth, sun, moon] = input[0].split(" ").map((index) => Number(index));

function year(E, S,M){
  let count = 1;
  while(1){
    if((count-E)%15===0&&(count-S)%28===0&& (count-M)%19===0) break;
    count++;
  }
  return count;
}
const tmp =year(earth, sun, moon);
console.log(tmp);

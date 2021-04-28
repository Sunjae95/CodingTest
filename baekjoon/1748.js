const fs = require("fs");
const input = fs.readFileSync("input").toString().split("\r\n"); //콘솔입력
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const N = Number(input[0]);
let res = 0;
for(let i=1; i<=N ;i*=10){
    res += N-i+1;
}

console.log(res);
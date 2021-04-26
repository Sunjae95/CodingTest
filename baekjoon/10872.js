const fs = require("fs")
let input = fs.readFileSync('input').toString().split('\r\n'); //콘솔입력
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');    //백준입력

const N = input.map(element => Number(element));
let answer = 1;

while(N[0] > 0) {
    answer *= N[0];
    N[0]--;
}
console.log(answer)
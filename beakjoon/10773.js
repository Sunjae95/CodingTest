//K번 받을 수 입력
const fs = require("fs")

let input = fs.readFileSync('/dev/stdin').toString().split('\n');
const k =Number(input[0]);
let stack = [0];

//K번 실행
for(let i=1; i<=k; i++){
    const num = Number(input[i]);
    //다른수면 Push, 0이면 Pop
    if(num === 0){
        stack.pop();
    } else {
        stack.push(num);
    }
}
const answer = stack.reduce((pre, current) => {
    return pre+current;
}, 0);

console.log(answer);
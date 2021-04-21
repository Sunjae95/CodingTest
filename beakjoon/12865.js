const fs = require("fs")
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// let input = fs.readFileSync('input').toString().split('\r\n');   //콘솔입력

//배열 생성
const [n, k] = input.shift().split(' ');

const d = Array(Number(k)+1).fill(0);
const w = Array(Number(n)).fill(0);
const v = Array(Number(n)).fill(0);
//무게 가치 설정
for(let i=0 ;i<Number(n); i++){
 const [wi, vi] = input[i].split(' ');
 w[i] = Number(wi);
 v[i] = Number(vi);    
}

function dp() {
    for(let i=0; i<Number(n); i++){
        for(let j=Number(k); j>=1 ; j--){
            if(w[i] <= j){
                d[j] = d[j] >= d[j-w[i]] + v[i] ? d[j] : d[j-w[i]]+v[i]; 
            }
        }
    }
}
dp();

console.log(d[Number(k)]);

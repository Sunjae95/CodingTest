const fs = require("fs")
let input = fs.readFileSync('input').toString().split('\r\n'); //콘솔입력
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');    //백준입력

const [N, K] = input.shift().split(' ').map(element => Number(element));
//점화식해, 무게, 가치 설정
const d = Array(K + 1).fill(0);
const w = Array(N).fill(0);
const v = Array(N).fill(0);
input.forEach((element, index) => {
    const [wi, vi] = element.split(' ').map(element => Number(element));
    w[index] = wi;
    v[index] = vi;
});

function dp() {
    for (let i = 0; i < N; i++) {
        for (let j = K; j >= 1; j--) {
            if (w[i] <= j) {
                d[j] = d[j] >= d[j - w[i]] + v[i] ? d[j] : d[j - w[i]] + v[i]
            }
        }
    }
}

dp();
console.log(d[K]);

//점화식을 잘세울것..!!
//불변성을 유지하려 했으나 무게,가치 설정때 forEach를 쓰고싶어서 N,K 선언시 shift()사용

//이중 for문을 사용하여 d값을 계속 바라보고 수정할 수 있게 만듬 
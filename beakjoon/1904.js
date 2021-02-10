let fs = require("fs")
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map(function(a) {
    return +a
  });

let dp = Array(input+1).fill(0);
dp[1] = 1;
dp[2] = 2;

for(let i=3; i<=input; i++){
    dp[i]= dp[i-1]+dp[i-2];
    dp[i]%=15746
}

console.log(dp[input]);
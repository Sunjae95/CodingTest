const fs = require("fs");
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const input = fs.readFileSync("input").toString().split("\r\n");
const n = parseInt(input.shift());
const arr = input.map((v) => parseInt(v));

function solution(n, arr) {
  //초기값설정
  const dp = new Array(n).fill(null).map((v) => [0, 0]);
  dp[0][0] = 0;
  dp[0][1] = arr[0];

  for (let i = 1; i < n; i++) {
    //안먹을 때
    dp[i][0] = dp[i - 1][0] > dp[i - 1][1] ? dp[i - 1][0] : dp[i - 1][1];
    //먹을 때
    if (i > 1) {
      //세잔 연속 마시는 조건
      dp[i][1] =
        dp[i - 2][0] + arr[i - 1] + arr[i] > dp[i - 1][0] + arr[i]
          ? dp[i - 2][0] + arr[i - 1] + arr[i]
          : dp[i - 1][0] + arr[i];
    } else {
      dp[i][1] =
        dp[i - 1][0] + arr[i] > dp[i - 1][1] + arr[i]
          ? dp[i - 1][0] + arr[i]
          : dp[i - 1][1] + arr[i];
    }
  }
  const answer = dp[n - 1][0] > dp[n - 1][1] ? dp[n - 1][0] : dp[n - 1][1];
  return answer;
}
console.log(solution(n, arr));

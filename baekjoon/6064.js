const fs = require("fs");
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const input = fs.readFileSync("input").toString().split("\r\n"); //콘솔입력
const T = Number(input.shift());

function swap(M, N, x, y) {
  if (M > N) {
    let tmp = M;
    M = N;
    N = tmp;
    tmp = x;
    x = y;
    y = tmp;
  }
  return [M, N, x, y];
}

function calendar(M, N, x, y) {
  //작은것을 뒤로
  [M, N, x, y] = swap(M, N, x, y);
  //x는 작기 때문에 주기가 빨리돈다.
  let cx = x;
  let cy = x;
  let count = x;
  //예외조건
  if (x === 1 && y === 1) {
    return 1;
  } else if (x === y) {
    return count;
  }
  while (true) {
    //+x값만해주면서 y값찾음
    cy += M;
    count += M;
    if (cy > N) {
      cy -= N;
    }
    //탈출조건
    if (cx === cy) break;
    if (cx === x && cy === y) return count;
  }

  return -1;
}

for (let i = 0; i < T; i++) {
  const [M, N, x, y] = input[i].split(" ").map((index) => Number(index));

  console.log(calendar(M, N, x, y));
}

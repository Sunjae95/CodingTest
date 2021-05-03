const fs = require("fs");
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const input = fs.readFileSync("input").toString().split("\r\n"); //콘솔입력

const [N, S] = input.shift().split(" ").map((i) => parseInt(i));


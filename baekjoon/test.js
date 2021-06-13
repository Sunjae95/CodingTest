// const fs = require("fs");
// // const inputs = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const inputs = fs.readFileSync("input").toString().trim().split("\r\n");

//시간초과

function solution(orders, courses) {
  var answer = [];
  const set = new Set();
  orders.forEach((order) => {
    const tmp = order.split("");
    courses.forEach((course) => {
      if (tmp.length >= course) {
        const tt = getCombination(tmp, course);
        
      }
    });
  });
  return answer;
}

function getCombination(order, course) {
  const result = [];
  if (course === 1) return order.map((v) => [v]);

  order.forEach((fixed, index, arr) => {
    const rest = arr.slice(index + 1);
    const combinations = getCombination(rest, course - 1);
    const attached = combinations.map((combination) =>
      [fixed, ...combination].join("")
    );
    result.push(...attached);
  });

  return result;
}

solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2, 3, 4]);

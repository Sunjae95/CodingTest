// 1번

// function solution(inputString) {
//   const len = inputString.length;
//   let count = 0;
//   const stack = [];
//   //4번째 조건
//   if (
//     inputString[0] === ")" ||
//     inputString[0] === "}" ||
//     inputString[0] === ">" ||
//     inputString[0] === "]"
//   ) {
//     return count;
//   } else {
//     for (let i = 0; i < len; i++) {
//       if (
//         inputString[i] === "(" ||
//         inputString[i] === "{" ||
//         inputString[i] === "<" ||
//         inputString[i] === "["
//       ) {
//         stack.push(inputString[i]);
//       } else if (inputString[i] === ")") {
//         if (stack[stack.length - 1] === "(") {
//           count++;
//           stack.pop();
//         } else {
//           return (count = -i);
//         }
//       } else if (inputString[i] === "}") {
//         if (stack[stack.length - 1] === "{") {
//           count++;
//           stack.pop();
//         } else {
//           return (count = -i);
//         }
//       } else if (inputString[i] === ">") {
//         if (stack[stack.length - 1] === "<") {
//           stack.pop();
//           count++;
//         } else {
//           return (count = -i);
//         }
//       } else if (inputString[i] === "]") {
//         if (stack[stack.length - 1] === "[") {
//           stack.pop();
//           count++;
//         } else {
//           return (count = -i);
//         }
//       }
//     }
//     if (stack.length > 0) {
//       return (count = -(len - 1));
//     }
//   }
//   return count;
// }

//2번
function solution(array) {
  const dp = Array(array.length).fill(-1);
  for (let i = 0; i < array.length; i++) {
    let front = -1;
    let back = -1;
    for (let j = i; j >= 0; j--) {
      if (array[j] > array[i]) {
        front = j;
        break;
      }
    }
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] > array[i]) {
        back = j;
        break;
      }
    }
    if (front === -1) {
      dp[i] = back;
    } else if (back === -1) {
      dp[i] = front;
    } else {
      dp[i] = i - front <= back - i ? front : back;
    }
  }
  return dp;
}
solution([3, 5, 4, 1, 2]);
//3번

// function solution(ads) {
//   //입력순대로 정렬
//   let cost = 0;
//   let time = 0;
//   ads = ads.sort((a, b) => {
//     return a[0] - b[0];
//   });
//   while (ads.length > 0) {
//     ads = ads.sort((a, b) => {
//       if (time >= a[0] && time >= b[0]) {
//         return b[1] - a[1];
//       } else if (time >= a[0]) {
//         return -1;
//       } else {
//         return 1;
//       }
//     });

//     const now = ads.shift();
//     if (time > now[0]) {
//       cost += (time - now[0]) * now[1];
//     }

//     if (time <= now[0]) {
//       time = now[0] + 5;
//     } else {
//       time += 5;
//     }

//   }

//   return cost;
// }
// solution([[5, 2], [2, 2], [6, 3], [9, 2]]);

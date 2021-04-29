// //개수 순서대로 정렬
// //1~N개까지 삽입
// //조건 앞에 나왔던거 제외하면서 넣기
const s = "{{4,2,3},{3},{2,3,4,1},{2,3}}";
function solution(s) {
  var answer = [];
  s = s
    .replace(/{/g, "")
    .split("}")
    .sort((a, b) => (a.length > b.length ? 1 : -1))
    .filter((index) => index !== "");
    console.log(s);
    s = s.map((index) => {
        if (index[0] === ",") {
            
            index = index.slice(1,index.length)
        }
        return index.split('');
    });

    console.log(s);
    
  return answer;
}
solution(s);
// function solution(s) {
//   //문자열 => 배열 한자리씩 하면 안됨..!
//   const stringSlice = s.slice(1, s.length - 1);
//   const arr = [];
//   const queue = [];
//   let str = "";
//   for (let i = 0; i < stringSlice.length; i++) {
//     if (stringSlice[i] === "{") {
//         queue.length = 0;
//     } else if (stringSlice[i] === "}") {
//         arr.push(queue.slice());
//     } else if (stringSlice[i] === ",") {
//         str = "";
//         queue.push(str);
//         continue;
//     } else {
//       str += stringSlice[i];
//       // queue.push(stringSlice[i]);
//     }
//     str = "";
//   }
//   const arrSort = arr.sort((a, b) => {
//     return a.length > b.length ? 1 : -1;
//   });
//   console.log(arrSort);
//   const tmp = [];
//   //비교해서 다른거 찾기
//   for (let i = 0; i < arrSort.length; i++) {
//     tmp.push(addIndex(arrSort[i], tmp));
//   }
//   const answer = tmp.map((index) => Number(index));
//   console.log(answer);
//   return answer;
// }

// solution(s);

// function addIndex(arr1, arr2) {
//   let check = false;
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] === arr2[j]) {
//         check = true;
//         break;
//       }
//     }
//     if (!check) {
//       return arr1[i];
//     }
//     check = false;
//   }
// }

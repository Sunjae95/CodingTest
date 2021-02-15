//의상을 입력받아 배열을 만들어주는 함수


function solution(clothes) {
    var answer = 1;
    let arr = {};
    for(let i=0; i<clothes.length; i++) {
        if( arr[clothes[i][1]] ){     //종류가 추가 되어있는 경우
            arr[clothes[i][1]]++;
        } else {               //종류가 추가 되어있지않은 경우
            arr[clothes[i][1]] = 1;
        }
    }
    console.log(arr);
    for( let i=0; i<Object.keys(arr).length; i++ ){
        answer *= arr[Object.keys(arr)[i]]+1;
    }
    return answer - 1;      //모두 입지않은 경우 제외
}
const clothes = [['yellow_hat', 'headgear'], ['blue_sunglasses', 'eyewear'], ['green_turban', 'headgear']];

console.log(solution(clothes));

// let arr = new Object();

// //옷 종류별 이름 object 만들기
// function addClothes ( clothes ) { 
//     let arr = new Object();
//     clothes.forEach(index => {
//         if( arr[index[1]] === undefined ){
//             arr[index[1]] = [index[0]];
//         } else {
//             arr[index[1]].push(index[0]);
//         }            
//     });


//     return arr;
// }

// //옷 종류 배열
// function arrType ( clothes ) {
//     let arr = [];
//     for(let i=0; i<Object.keys(clothes).length; i++){
//         arr.push(Object.keys(clothes)[i]);
//     }
//     return arr;
// }

// //조합 구하기
// const getCombinations = function (arr, selectNumber) {
//     const results = [];
//     if (selectNumber === 1) return arr.map((value) => [value]); // 1개씩 택할 때, 바로 모든 배열의 원소 return
  
//     arr.forEach((fixed, index, origin) => {
//       const rest = origin.slice(index + 1); // 해당하는 fixed를 제외한 나머지 뒤
//       const combinations = getCombinations(rest, selectNumber - 1); // 나머지에 대해서 조합을 구한다.
//       const attached = combinations.map((combination) => [fixed, ...combination]); //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
//       results.push(...attached); // 배열 spread syntax 로 모두다 push
//     });
  
//     return results; // 결과 담긴 results return
// }

// const a = addClothes(clothes);
// const b = arrType(a);
// // console.log(a);
// // console.log(b);
// //1개부터 n개까지 조합 구하기
// for(let i=1; i<=b.length; i++){
//     const result = getCombinations(b, i);
//     //개수 구하기
//     console.log(result);
// }
// // const example = [1,2,3,4];
// // console.log(result);
// // console.log(a[result[0][0]].length*a[result[0][1]].length);
  
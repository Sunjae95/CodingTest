const test = [1, 2, 3, 4];

//간단히 for문을 통해 구현
function getPermutation1(arr) {
    //처음수 뽑기
    const res = [];
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (i === j) continue;
            for (let k = 0; k < len; k++) {
                if (i === k || j === k) continue;
                res.push([arr[i], arr[j], arr[k]]);
            }
        }
    }
    return res;
};
//실행
// console.log(permutation1(test)); 

//1번에서 check를 사용하여 구현
function getPermutation2(arr) {
    const res = [];
    const len = arr.length;
    const isUsed = new Set();
    for (let i = 0; i < len; i++) {
        isUsed.add(i);
        for (let j = 0; j < len; j++) {
            if (isUsed.has(j)) continue;
            isUsed.add(j);
            for (let k = 0; k < len; k++) {
                if (isUsed.has(k)) continue;
                res.push([arr[i], arr[j], arr[k]]);
            }
            isUsed.delete(j);
        }
        isUsed.delete(i);
    }
    return res;
}
//실행
console.log(getPermutation2(test));

//재귀함수를 사용하여 구현
function getPermutation3(arr, r, tmp, res) {
    if( tmp.length === r ) {
        res.push(tmp);
        return res;
    }

    for(let i=0; i<arr.length; i++){
        if(check.has(i)) continue;
        check.add(i);
        tmp.push(arr[i]);
        res = getPermutation3(arr, r, tmp, res);
        tmp.pop();
        check.delete(i);       
    }

    return res;
}
const check = new Set();
console.log(getPermutation3(test,3,[],[]));

// 순열 재귀
// n: 1~n까지 checked:빈배열 arr: 임시로 담을 배열
const answer = [];
function permutation(n, checked, arr) {
  if (arr.length === n) {
    const tmp = [];
    arr.forEach((element) => {
      tmp.push(element);
    });
    answer.push(tmp);
    return;
  }

  for (let i = 1; i <= n; i++) {
    if (!checked[i]) {
      checked[i] = true;
      arr.push(i);
      permutation(n, checked, arr);
      arr.pop();
      checked[i] = false;
    }
  }
}
permutation(n, checked, []);
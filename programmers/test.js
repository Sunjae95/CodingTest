function solution(arr){
  const count = new Array(101).fill(0);

  arr.forEach(num => {
    count[num]++;
  });

  const result = count.filter(value=> value>1);
  return result.length === 0 ? [-1] : result;
}

console.log(solution([3,5,7,9,1]))
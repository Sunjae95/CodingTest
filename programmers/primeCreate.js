function solution(nums) {
  const primer = new Array(3001).fill(true);
  prime(primer);
  const combination = getCombination(3, nums);

  const answer = combination.reduce((count, now) => {
    const nowTotal = now.reduce((pre, cur) => pre + cur, 0);
    if (primer[nowTotal]) return count + 1;
    return count;
  }, 0);
  return answer;
}

function getCombination(k, arr) {
  const results = [];
  if (k === 1) return arr.map((value) => [value]);

  arr.forEach((fixed, index) => {
    const rest = arr.slice(index + 1);
    const combinations = getCombination(k - 1, rest);
    const attacted = combinations.map((combination) => [fixed, ...combination]);
    results.push(...attacted);
  });

  return results;
}

function prime(primer) {
  for (let i = 2; i < primer.length; i++) {
    if (!primer[i]) continue;

    for (let j = 2 * i; j <= primer.length; j += i) {
      primer[j] = false;
    }
  }
}

function solution(nums) {
  const overlap = new Set();
  const maxCount = nums.length / 2;
  let count = 0;

  for (const phone of nums) {
    if (count === maxCount) break;
    if (overlap.has(phone)) continue;
    overlap.add(phone);
    count++;
  }

  return count;
}

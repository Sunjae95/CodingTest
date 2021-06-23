function solution(lottos, win_nums) {
  const removeZero = lottos.filter((value) => value !== 0);
  const possibleCount = 6 - removeZero.length;
  const winCount = removeZero.reduce((pre, now) => {
    const isWin = win_nums.some((value) => value === now);
    if (isWin) return pre + 1;
    return pre;
  }, 0);

  if (winCount === 0 && removeZero.length === 6) return [6, 6];

  const best = 7 - (possibleCount + winCount);
  const worst = 7 - winCount === 7 ? 6 : 7 - winCount;
  return [best, worst];
}

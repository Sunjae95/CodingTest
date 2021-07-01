function solution(lines) {
  lines = lines.reduce((line, cur) => {
    const tmp = cur.split(" ");
    const endTime = tmp[1].split(":").reduce((pre, cur, index) => {
      switch (index) {
        case 0: {
          return parseInt(cur) * 3600;
        }
        case 1: {
          return pre + parseInt(cur) * 60;
        }
        default: {
          return pre + Number(cur);
        }
      }
    }, 0);
    const runningTime = Number(tmp[2].slice(0, tmp[2].length - 1)) - 0.001;
    const nTmp = Number((endTime - runningTime).toFixed(3));
    const startTime = nTmp >= 0 ? nTmp : 0;
    return [...line, [startTime, endTime, runningTime]];
  }, []);

  lines.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    }
    return a[0] - b[0];
  });

  console.log(lines);
  const count = lines.reduce((max, cur, index) => {
    const start = cur[0];
    const end = cur[1];
    const now = [0, 0];
    for (let i = 0; i < lines.length; i++) {
      const isStartRange = lines[i][1] < start || start + 1 <= lines[i][0];
      const isEndRange = lines[i][1] < end || end + 1 <= lines[i][0];
      if (!isStartRange) now[0]++;
      if (!isEndRange) now[1]++;
    }
    const nowMax = Math.max(now[0], now[1]);
    return max >= nowMax ? max : nowMax;
  }, 0);

  return count;
}

function solution(n, t, m, p) {
  const answer = [];
  let count = 0;
  let queue = [];

  for (let i = 0; i < t; i++) {
    [count, queue] = checkEmpty(count, queue, n);

    for (let j = 1; j <= m; j++) {
      [count, queue] = checkEmpty(count, queue, n);

      const res = queue.shift();
      if (j !== p) continue;
      answer.push(res.toUpperCase());
    }
  }
  return answer.join("");
}

function checkEmpty(count, queue, n) {
  if (queue.length > 0) return [count, queue];

  const chagedNumber = count.toString(n);
  queue.push(...chagedNumber);
  count++;

  return [count, [...queue]];
}


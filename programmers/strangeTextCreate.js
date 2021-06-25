function solution(text) {
  const textArray = text.split(" ");

  const answer = textArray.reduce((pre, text) => {
    const a = text.split("");

    for (let i = 0; i < a.length; i++) {
      if (i % 2 === 0) a[i] = a[i].toUpperCase();
      else a[i] = a[i].toLowerCase();
    }

    return [...pre, a.join("")];
  }, []);

  return answer.join(" ");
}

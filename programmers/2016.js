function solution(a, b) {
  const month = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const date = {
    0: "THU",
    1: "FRI",
    2: "SAT",
    3: "SUN",
    4: "MON",
    5: "TUE",
    6: "WED",
  };

  let totalDay = addMonth(month, a);
  totalDay += b;
  const dateKey = totalDay % 7;

  return date[dateKey];
}

function addMonth(month, a) {
  let count = 0;
  for (let i = 0; i < a; i++) {
    count += month[i];
  }
  return count;
}

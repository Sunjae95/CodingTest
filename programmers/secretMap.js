function solution(n, arr1, arr2) {
  const board = arr1.reduce((set, cur, index) => {
    const row1 = getRow(n, cur.toString(2));
    const row2 = getRow(n, arr2[index].toString(2));
    const line = getLine(row1, row2, n);

    return [...set, line];
  }, []);

  return board;
}

function getRow(n, row) {
  if (row.length < n) {
    while (row.length < n) {
      row = 0 + row;
    }
  }
  return row;
}
function getLine(row1, row2, n) {
  const line = [];
  for (let i = 0; i < n; i++) {
    if (row1[i] === "1" || row2[i] === "1") {
      line.push("#");
    } else {
      line.push(" ");
    }
  }
  return line.join("");
}

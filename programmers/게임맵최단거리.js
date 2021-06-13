function solution(maps) {
    const answer = bfs(maps);
    return answer;
  }
  
  function bfs(maps) {
    const MAX_ROW = maps.length;
    const MAX_COLUMN = maps[0].length;
  
    const dictRow = [0, 0, 1, -1];
    const dictColumn = [1, -1, 0, 0];
  
    const visited = new Array(MAX_ROW)
      .fill(null)
      .map((v) => new Array(MAX_COLUMN).fill(false));
    const queue = [[0, 0]];
    visited[0][0] = true;
    let point = 0;
    let count = 0;
  
    while (queue.length > point) {
      count++;
      const depsEnd = queue.length;
  
      while (depsEnd > point) {
        const [row, column] = queue[point++];
        if (row === MAX_ROW - 1 && column === MAX_COLUMN - 1) return count;
  
        for (let i = 0; i < 4; i++) {
          const nextRow = row + dictRow[i];
          const nextColumn = column + dictColumn[i];
          if (
            0 <= nextRow &&
            nextRow < MAX_ROW &&
            0 <= nextColumn &&
            nextColumn < MAX_COLUMN
          )
            if (
              !visited[nextRow][nextColumn] &&
              maps[nextRow][nextColumn] === 1
            ) {
              visited[nextRow][nextColumn] = true;
              queue.push([nextRow, nextColumn]);
            }
        }
      }
    }
    return -1;
  }
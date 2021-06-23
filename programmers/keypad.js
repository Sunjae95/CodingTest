function solution(numbers, hand) {
  const left = {
    row: 3,
    column: 0,
  };
  const right = {
    row: 3,
    column: 2,
  };

  const answer = [...numbers].reduce((pre, cur) => {
    switch (cur) {
      case 1:
      case 4:
      case 7: {
        const location = cur - 1 === 0 ? 0 : (cur - 1) / 3;
        const command = moveHand("L", left, location);
        return [...pre, command];
      }
      case 3:
      case 6:
      case 9: {
        const location = cur / 3 - 1;
        const command = moveHand("R", right, location);
        return [...pre, command];
      }
      case 2:
      case 5:
      case 8: {
        const location = Math.floor(cur / 3);
        const command = moveMiddle(location, left, right, hand);
        return [...pre, command];
      }
      default: {
        const command = moveMiddle(3, left, right, hand);
        console.log("end", left, right);
        return [...pre, command];
      }
    }
  }, []);

  return answer.join("");
}

function moveHand(dist, hand, location) {
  if (dist === "L") {
    hand.row = location;
    hand.column = 0;
    return "L";
  } else {
    hand.row = location;
    hand.column = 2;
    return "R";
  }
}

function moveMiddle(location, left, right, hand) {
  const leftDist = Math.abs(location - left.row) + Math.abs(1 - left.column);
  const rightDist = Math.abs(location - right.row) + Math.abs(1 - right.column);
  if (leftDist > rightDist) {
    right.row = location;
    right.column = 1;
    return "R";
  } else if (leftDist < rightDist) {
    left.row = location;
    left.column = 1;
    return "L";
  } else {
    if (hand === "right") {
      right.row = location;
      right.column = 1;
      return "R";
    } else {
      left.row = location;
      left.column = 1;
      return "L";
    }
  }
}

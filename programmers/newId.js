function solution(new_id) {
  const textOne = new_id.toLowerCase();

  const regTwo = /[^0-9a-z_.-]/;
  const textTwo = textOne.split(regTwo).join("");

  let dot = 0;
  const textThree = [...textTwo].reduce((prev, t) => {
    if (t !== ".") {
      dot = 0;
      return prev + t;
    }
    dot++;
    if (dot === 1) return prev + t;
    return prev;
  }, "");

  let textFour = textThree;
  if (textFour[0] === ".") {
    textFour = textFour.slice(1);
  }
  if (textFour[textFour.length - 1] === ".") {
    textFour = textFour.slice(0, textFour.length - 1);
  }

  let textFive = textFour;
  if (textFive.length === 0) textFive = "a";

  let textSix = textFive;
  if (textSix.length >= 16) {
    textSix = textSix.slice(0, 15);
    while (true) {
      if (textSix[textSix.length - 1] !== ".") break;
      textSix = textSix.slice(0, textSix.length - 1);
    }
  }

  let textSeven = textSix;
  if (textSeven.length < 3) {
    while (textSeven.length < 3) {
      textSeven += textSeven[textSeven.length - 1];
    }
  }
  return textSeven;
}

let readline = require('readline');
let r = readline.createInterface({
  input:process.stdin,
  output:process.stdout,
});
const l = r.question("layer: ", (answer) => {
  console.log("hi", answer);
  r.close();
}).then(answer);

const a = r.question("a:", (answer) => {
  console.log("hi", answer);
  r.close();
}).then(answer);

console.log(l, a);
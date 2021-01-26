let readline = require('readline');
let r = readline.createInterface({
  input:process.stdin,
  output:process.stdout,
});

// 한줄 입력
r.question("what1: ", (answer) => {
  console.log("hi", answer);
  r.close();
})
//연속적으로 입력받기
r.setPrompt('what2: ');
r.prompt();
r.on('line', (line) => {
  if(line === 'exit'){
    r.close();
  }
  console.log(line);
  r.prompt;
});
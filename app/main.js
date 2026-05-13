const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "$ ",
});

rl.on('line', (command) => {
  if (command === "exit") {
    rl.close();
    return;
  }
  else if (command[0] === "echo") {
    console.log(`${rl.input[1:-1]}`);
  } else {
    console.log(`${command[0]}: command not found`);
  }
  rl.prompt();
});

rl.prompt();



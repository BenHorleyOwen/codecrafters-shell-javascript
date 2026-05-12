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
  else if (command === "echo") {
    console.log(`${rl.input}`);
  } else {
    console.log(`${command}: command not found`);
  }
  rl.prompt();
});

rl.prompt();



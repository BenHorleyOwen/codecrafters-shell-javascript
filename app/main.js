const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "$ ",
});

rl.on('line', (command) => {
  console.log(`${command}: command not found`);
});


rl.prompt();

const { type } = require("os");
const { exit } = require("process");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "$ ",
  continue: true,
  builtin: {
    echo: (command) => {
      args = command.slice(5).split(" ");
      console.log(args.join(" "));
    },
    type: (command) => {
      instruction = command.split(" ")[0];
      args = command.slice(5).split(" ");
      if (args.length > 1) { // error check
        console.log("type: too many arguments");
      }
      if (args.length === 0) { // error check
        console.log("type: too few arguments");
      }
      if (args[0] in rl.builtin) { // if the command is in builtin, return builtin
        console.log(`${instruction} is a shell builtin`);
      } 
      else {
        console.log(`${instruction}: not found`);
      }
    },
    exit: () => {
      rl.close();
      rl.continue = false;
    }
  }
});

rl.on('line', (command) => {
  instruction = command.split(" ")[0];
  if (instruction in rl.builtin) { //call shell builtins
    rl.builtin[instruction](command);
  } else { // unrecognised command
    console.log(`${command}: command not found`);
  }
  if (rl.continue){
    rl.prompt();
  }
});

rl.prompt();


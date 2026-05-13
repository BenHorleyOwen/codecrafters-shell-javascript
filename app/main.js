const { exit } = require("process");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "$ ",
  continue: true,
});

const builtin = {
  echo: (command) => {
    let args = command.slice(5).trim().split(/\s+/);
    console.log(args.join(" "));
  },

  type: (command) => {
    let args = command.slice(5).trim().split(/\s+/);
    if (args.length > 1) { // error check
      console.log("type: too many arguments");
      return;
    }
    else if ((args.length === 0 || args[0] === "")) { // error check
      console.log("type: too few arguments");
      return;
    }
    else if (args[0] in builtin) { // if the command is in builtin, give proper console log
      console.log(`${args[0]} is a shell builtin`);
    } 
    else {
      console.log(`${args[0]}: not found`);
    }
  },

  exit: () => {
    rl.continue = false;
  }
}

rl.on('line', (command) => {
  instruction = command.split(" ")[0];
  if (instruction in builtin) { //call shell builtins
    builtin[instruction](command);
  } else { // unrecognised command
    console.log(`${command}: command not found`);
  }
  if (rl.continue){
    rl.prompt();
  }
});

rl.prompt();


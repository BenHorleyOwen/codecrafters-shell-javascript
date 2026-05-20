const path = require("path");
const fs = require('fs');
const { exit } = require("process");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "$ ",
});

const PATH = process.env.PATH.split(path.delimiter);
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
    else if (PATH.some(dir => fs.existsSync(path.join(dir, args[0])))) { // check if the command exists in PATH
      //create an array of each instance of the command in PATH and check if it is executable, then print the path
      potentialCommands = PATH.map(dir => path.join(dir, args[0])).filter(file => fs.existsSync(file)); // the map joins the command to the directory
      potentialCommands.forEach(dir => {
        try {
          fs.accessSync(dir, fs.constants.X_OK);
          console.log(`${args[0]} is ` + dir);
        } catch (err) {
          // do nothing, the file is not executable
        }
      });
    }
    else {
      console.log(`${args[0]}: not found`);
    }
  },

  exit: () => {
    rl.close();
    exit(0);
  }
}

rl.on('line', (command) => {
  instruction = command.split(" ")[0];
  if (instruction in builtin) { //call shell builtins
    builtin[instruction](command);
  } else { // unrecognised command
    console.log(`${command}: command not found`);
  }
  rl.prompt();
});

rl.prompt();


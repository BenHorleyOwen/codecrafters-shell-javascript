In this challenge, I built a POSIX compliant shell that's capable of interpreting shell commands (running both external programs and builtin commands). 

I also documented my engineering decisions to help with evaluating my own skillset and areas for improvement

head over to [codecrafters.io](https://codecrafters.io) to try the challenge.

# Results
- Built a POSIX-inspired shell in JavaScript using Node.js and the readline module
- Implemented a REPL (Read–Eval–Print Loop) architecture for interactive shell execution
- Developed builtin shell commands including exit, echo, type, pwd, and cd
- Implemented Unix-style PATH resolution for locating executable programs
- Used child_process.spawnSync to execute external programs with inherited stdio streams
- Managed process arguments and executable invocation using argv0 and command parsing
- Implemented relative, absolute, and home-directory (~) path navigation
- Worked with environment variables including PATH and HOME
- Applied filesystem and executable permission checks using Node.js filesystem APIs
- Explored process management and synchronous execution behavior in a shell environment
- Refactored command handling logic from conditional chains toward dictionary/hashmap-based lookup
- Evaluated performance tradeoffs between PATH preprocessing and runtime executable lookup
- Debugged shell behavior, command parsing issues, and terminal environment configuration
- Used VSCode and terminal tooling for Linux-style CLI development workflows
- Applied Unix/Linux shell concepts including working directories, executables, and command dispatching
- Investigated shell implementation details such as recursive prompting and event-driven input handling
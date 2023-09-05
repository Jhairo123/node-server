import readlineSync from "readline-sync";
import chalk from "chalk";

const log = console.log;
let arrayTask = [];

export function addTask() {
  let index = arrayTask.length;
  let name = "";
  console.log("The name for task is a required field");
  do {
    name = readlineSync.question("> Add a name for task (required): ");
  } while (!name.trim());
  const description = readlineSync.question("> Add a description for task: ");
  const newTask = {
    id: index,
    name: name,
    description: description,
    state: false,
  };
  arrayTask = [...arrayTask, newTask];
  if (index >= 1) arrayTask[index].id = arrayTask[index - 1].id + 1;
  else arrayTask[index].id = ++index;
}

export function deleteTask() {
  const indexText = readlineSync.question(
    "> Type the id of the task you want to delete: "
  );
  const indexInt = parseInt(indexText);
  let message = "";
  arrayTask = arrayTask.filter((task) => {
    const condition = task.id !== indexInt;
    if (!condition) {
      message = "The task has been delete";
    }
    return condition;
  });
  message == "" ? (message = "The task doesn´t exist") : message;
  log("");
  log(chalk.white.bgRed(message));
}

export function completeTask() {
  const index = readlineSync.question(
    "> Type the id the task you want to complete: "
  );
  arrayTask.forEach((task) => {
    if (task.id == index) {
      task.state = true;
    }
  });
}

export function showTask() {
  arrayTask.forEach((task) => {
    if (task.state) {
      log(
        chalk.red(
          `\n| Id: ${task.id}\n| Task: ${task.name}\n| Descripcion: ${task.description}\n| State: Completada\n`
        )
      );
    } else {
      log(
        chalk.green(
          `\n| Id: ${task.id}\n| Task: ${task.name}\n| Descripcion: ${task.description}\n| State: Pendiente\n`
        )
      );
    }
  });
}

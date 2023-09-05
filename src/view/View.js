import readlineSync from "readline-sync";
export let option = 0;

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

const mainMenu = [
  "|===============================|",
  "|\t Lista de tareas\t|",
  "|===============================|",
  "|1. Añadir tarea\t\t|",
  "|2. Eliminar tarea\t\t|",
  "|3. Completar tarea\t\t|",
  "|4. salir\t\t\t|",
  "|===============================|",
];

export async function showView() {
  const menu = "";

  mainMenu.map((item) => console.log(item));
  console.log("|===============================|");
  // const opcion = await rl.question('What do you think of Node.js? ');
  const opcion = readlineSync.question("> Type a option: ");
  console.log("|===============================|\n");
  option = parseInt(opcion);
  // verificar(1, 5, seleccion, parseInt(1));
}

export function exit() {
  console.log("Exit...");
  process.exit();
}

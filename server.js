const express = require("express");
const app = express();
const port = 3000;
const tasks = require("./tasks.json");
app.use(express.json());

// Ruta para obtener la lista de tareas en formato JSON
app.get("/tasks", (req, res) => {
  res.status(200).send({ tasks: tasks });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(
    `Servidor con Express en funcionamiento: http://localhost:3000/tasks`
  );
});

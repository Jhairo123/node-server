const http = require("http");

const HOST = "localhost";
const PORT = 8000;

// Crear el servidor HTTP
const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    res.writeHead(200, { "Content-Type": "application/json" });

    const tasks = [
      { id: 1, description: "Hacer la compra", completed: false },
      { id: 2, description: "Estudiar Node.js", completed: true },
    ];

    res.end(JSON.stringify(tasks));
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Ruta no encontrada");
  }
});
server.listen(PORT, HOST, () => {
  console.log(`Servidor escuchando en http://${HOST}:${PORT}/`);
});

const http = require("http");
const fs = require("fs");

const tasks = [
  { id: 1, description: "Hacer la compra", completed: false },
  { id: 2, description: "Estudiar Node.js", completed: true },
];

function startServer(tasks) {
  const port = 8000;
  const host = "localhost";

  const server = http.createServer((req, res) => {
    const pathname = req.url;

    if (pathname === "/userTask") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(tasks));
    } else {
      const htmlFile = fs.readFileSync("../page/index.html", "utf8");
      const cssFile = fs.readFileSync("../page/styleSheet.css", "utf8");

      const htmlCssFile = `
      <html>
        <head>
          <style>${cssFile}</style>
        </head>
        <body>
          ${htmlFile}
        </body>
      </html>
    `;

      // Envía la respuesta con el contenido HTML y los estilos CSS
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end(htmlCssFile);
    }
  });
  server.listen(port, host, () => {
    console.log(`Servidor en http://${host}:${port}/userTask`);
  });
}

startServer(tasks);

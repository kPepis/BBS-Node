const http = require("http");
const { loadFile } = require("./utils/file-server");

const PORT = 3000;

const server = http.createServer((request, response) => {
  console.log("request ", request.url);

  loadFile(request.url, response);
});

server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

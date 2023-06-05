import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import * as http from 'http';

dotenv.config();
const app = express();
app.use(cors());

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  console.log('Listening on ' + bind);
}

app.use((req, res, next) => {
  res.set("Access-Control-Allow-Credentials", "true");
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Headers", "Content-Type");
  res.set("Access-Control-Allow-Methods", "OPTIONS,GET,PUT,POST,DELETE");
  next();
});

//fake api
app.get("/api/download-pdf", (req, res) => {
  const pdfPath = "./assets/resume.pdf";
  res.download(pdfPath, "resume.pdf");
});

const port = process.env.PORT;
app.set('port', port);
var server = http.createServer(app);
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
/*app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});*/

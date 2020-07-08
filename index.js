let http = require("http");
let fs = require("fs");
const url = require("url");
const successfulResponseCode = 200;
const port = 8080;
const server = http.createServer(function (req, res) {
  
  let query = url.parse(req.url, true);

  let filename = "." + query.pathname;
  fs.readFile(filename, (err, data) => {
    if (err) {
      fs.readFile('./404.html', (err,data) => {
        res.end(data);
      })
    } else {
      res.writeHead(successfulResponseCode, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    }
  });
}).listen(port);

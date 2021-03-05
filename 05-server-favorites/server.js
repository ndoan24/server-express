// Start our server
const http = require('http')
const PORT = 8080;
const fs = require("fs");
var server= http.createServer(handleRequest);
//Start our server
server.listen(PORT, function(){
    //callback triggered when server is successfully listening, Hurray!
    console.log("Server listening on: http://localhost:" + PORT);
});
function handleRequest(req, res) {
  var path = req.url;
    switch (path) {
        case "/":
          return renderHTML("/index.html",res);
        case "/food":
        case "/frameworks":
        case "/movies":
            return renderHTML(path + ".html", res);
    
    }
}
function renderHTML(filePath, res) {
  // Here we use the fs package to read our index.html file
  return fs.readFile(__dirname + filePath, function(err, data) {
  // We then respond to the client with the HTML page by
  // specifically telling the browser that we are delivering an HTML file.
      res.writeHead(200, { "Content-Type": "text/html"});
      res.end(data);
  });
};

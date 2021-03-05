// Start our server
const http= require('http')
const PORT=8080;
var server= http.createServer(handleRequest);
//Start our server
server.listen(PORT, function(){
    //callback triggered when server is successfully listening, Hurray!
    console.log("Server listening on: http://localhost:" + PORT);
});
  // Callback triggered when server is successfully listening. Hurray!
console.log("Server is listening on: http://localhost:" + PORT);
// Create a function which handles incoming requests and sends responses
function handleRequest(req, res) {
  // Capture the url the request is made to
 const path = req.url; 
  // console.log('current path, path')
  // Depending on the URL, display a different HTML file.
  switch (path) {
    case "/":
      return displayRoot(res);
    case "/portfolio":
      return displayPortfolio(res);
    default:
      return display404(path, res);
    }
}
  // When someone visits the "http://localhost:8080/" path, this function is run.
  function displayRoot(res){
    const myHTML = "<html>" + "<body><h1>HOME PAGE</h1>" +  "<a href = '/portfolio'>Portfolio</a>"
     + "</body></html>";
     
    
// Configure the response to return a status code of 200 (meaning everything went OK), and to be an HTML document
    
res.writeHead(200, {"Content-Type": "text/html"});
    // End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
res.end(myHTML);
  }
  // When someone visits the "http://localhost:8080/portfolio" path, this function is run.
function displayPortfolio(res) {
    var myHTML= "<html>" + "<body><h1>My Portfolio</h1>" +
    "<a href='/'>Go Home</a>" +
    "</body></html>";
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end(myHTML);
}
    // Configure the response to return a status code of 200 (meaning everything went OK), and to be an HTML document
   
    // End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
  // When someone visits any path that is not specifically defined, this function is run.
  function display404(url, res) {
      var myHTML= "<html>" + 
      "<body><h1> 404 NOT FOUND</h1>" +
      "<p>The page you were looking for: " + url + "cannot be located</p>" + "</body></html>";
      res.writeHead(404, {"Content-type": "text/html"})
      res.end(myHTML);
    }
    // Configure the response to return a status code of 404 (meaning the page/resource asked for couldn't be found), and to be an HTML document
    
    // End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
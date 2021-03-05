const http = require('http');
const fs = require('fs');
const PORT = 9000;
const server = http.createServer(handleRequest);

function handleRequest(req, res){
    const path = req.url;
    switch (path){
        case "/thanks":
        return renderThankYourPage(req, res);
        default:
        return renderWelcomePage(req, res);
    }
}
function renderWelcomePage(req, res){
    fs.readFile(__dirname + "/index.html", function(err, data){
        if (err){
            res.writeHead(500, { "Content-Type": "text/html"})
            res.end("<html><head><title>Opps</title></head><body><h1>Opps, Something went wrong</h1></body></html>")
        } else {
            res.writeHead(200, { "Content-Type": "text/html"})
            res.end(data);
        }
    })
}
function renderThankYourPage(req, res){
   var requestData = "";
   var myHTML = "<html><head><title>Hello Node!</title></head><body><h1> I didn't get any data </h1></body></html>";
  
   req.on("data", function (data){
       requestData += data;
       console.log("You just posted some data to the server: \n", requestData);
       myHTML = "<html><head><title>Hello Noder!</title></head><body><h1>Thank you for the data:</h1> <code>" + 
       requestData + "</code>" + "</body></html>"
   });
   
   req.on("end", function(){
       res.writeHead(200, { "Content-Type": "text/html" });
       res.end(myHTML);
   })
   
}
server.listen(PORT, function(){
   console.log("Server listening on: http://localhost:" + PORT)
});
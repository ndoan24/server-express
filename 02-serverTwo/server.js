// We require/import the HTTP module
const http=require ("http");
// =====================================================================
// Then define the ports we want to listen to

const PORT1=7000;
const PORT2=7500;
// =====================================================================

// We need two different functions to handle requests, one for each server.

function handleRequest(request, response) {
    
    response.end('Yay! It works! Path: ' + request.url);

}
var server1 = http.createServer(handleRequest);
var server2 = http.createServer(handleRequest);

// =====================================================================
// Create our servers
server1.listen(PORT1, function() {
    console.log('Do what you can with all you have wherever you are - Theodore Roosevelt');
});

server2.listen(PORT2, function() {
console.log('Live each day as if your life had just begun');
})


// =====================================================================

// Starting our servers

  // Callback triggered when server is successfully listening. Hurray!

  // Callback triggered when server is successfully listening. Hurray!
  

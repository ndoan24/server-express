// Require/import the HTTP module


const http=require ("http");

// Define a port to listen for incoming requests

const PORT=8080;

// Create a generic function to handle requests and responses
// Pass the handleRequest function to empower it with functionality.

function handleRequest(request, response) {
count++
console.log(`Request ${count}.Url requested ${request.url}`);
response.end("It Works Path Hit: " + request.url)
}

// another way to write it 

// function handleRequest(request, response) {
//      console.log("Request Made!");
//      response.end("It Works! Path hit: ${request.url}")
// }

//Send the string to the client when the user visits the PORT url



// Use the Node HTTP package to create our server.

const server= http.createServer(handleRequest);

// Start our server so that it can begin listening to client requests.

server.listen(PORT, function(){


     // Log (server-side) when our server has started
     console.log("server is running on: http://localhost: " + PORT);
})
 

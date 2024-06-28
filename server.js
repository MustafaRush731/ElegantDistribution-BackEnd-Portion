const app = require('./app'); // importing the app.js file
const http = require('http');

// creating the port and setting it to 3000 and then setting it to the app
const port = process.env.PORT || 3000;
app.set('port', port); // optional: used for reference in the app.js file


//creates an HTTP server that uses app.js to handle incoming requests
const server = http.createServer(app);

// server is listening to the port
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
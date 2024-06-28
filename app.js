// this is not needed since its purpose was to test if the server is running. create endpoints in router folder instead

const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
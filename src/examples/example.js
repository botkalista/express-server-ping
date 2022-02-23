const express = require('express');
const app = express();

const serverStatus = require('../index.js');

app.use(serverStatus());

const server = app.listen(8000);

const fetch = require('node-fetch');

fetch('http://127.0.0.1:8000/status').then(res => res.json()).then(data => {
    const now = Date.now();
    const roundtriptime = now - data.time;
    console.log(`Server is up | ${roundtriptime} ms`);
}).catch(ex => {
    console.log(`Server is down`);
}).finally(() => {
    server.close();
});
# Express Server Status

Basic  middleware that creates an endpoint to check if the server is running.

### Params

- Default param for Method is GET
- Default param for Path is /status

## Install

```sh
$ npm install express-server-status
```

## Usage

To use it with default settings

```js
const serverStatus = require("express-server-status");

//  create the endpoint on GET /status
app.use(serverStatus());
```

To use it on a custom path

```js
const serverStatus = require("express-server-status");

//  create the endpoint on GET /custom_endpoint
app.use(serverStatus({path:'/custom_endpoint'}));
```

## `Response`

The created endpoint will send a response with a json like this `{time: 000}` where the value is the timestamp when the server received the request.
So to check the ping you can do:

> Code from examples/example.js

```js
fetch('https://127.0.0.1/status').then(res => res.json()).then(data => {
    const now = Date.now();
    const roundtriptime = now - data.time;
    console.log(`Server is up | ${roundtriptime} ms`);
}).catch(ex => {
    console.log(`Server is down`);
}).finally(() => {
    server.close();
});
```

## License
MIT ©
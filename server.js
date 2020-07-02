const express = require('express');
const bodyParser = require('body-parser')
const next = require('next')

const Routes = require('./api/routes/apiRoute');

const port = process.env.port || 3000;

const dev = process.env.NODE_ENV !== 'production'

const app = next({ dev });
const handle = app.getRequestHandler()

app.prepare().then(() => {
    const server = express();
    // server.use(bodyParser.json());

    Routes(server);

    server.get('*', (req, res) => {
        return handle(req, res)
    });

    server.listen(port, (err) => {
        if (err) throw err;
        console.log('Server is listening on port '+port);
    });
});


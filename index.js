process.env.UV_THREADPOOL_SIZE = 1;
const cluster = require('cluster');

if (cluster.isMaster) {
    cluster.fork();
} else {
    const express = require('express');
    const crypto = require('crypto');
    const app = express();

    app.get('/', (req, res) => {
        crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
            res.send('Hello Gabo');
        });
    });

    app.get('/flash', (req, res) => {
        res.send('Hello Flash Gabo');
    });

    app.listen(3000);
}

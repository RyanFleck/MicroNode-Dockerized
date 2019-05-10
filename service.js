console.log('[INIT] MicroNode-Dockerized');

const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.json({
        'message':'hello, world', 
    });
});

app.listen( 7654 , '0.0.0.0' );

console.log('[INIT] MicroNode-Dockerized');

const express = require('express');

const app = express();

app.get('/', (req, res) => {
    const d = new Date();
    res.json({
        'message':'hello, world',
        'timestamp': `Past ${d.getHours()}00h.`,
    });
});

app.listen( 7654 , '0.0.0.0' );

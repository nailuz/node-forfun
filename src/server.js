import express from 'express';

const PORT = process.env.PORT;
const HOST = process.env.HOST || '0.0.0.0';

const app = express();

app.get('/', (req, res) => {
    res.send('Work a l BRO')
});

app.listen(PORT, HOST);

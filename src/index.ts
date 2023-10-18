// console.log("WELCOME ERROR")
//  mongo db under atlanta base 312 console.log("welcome to the party")

import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';


const app = express();

app.use(cors({
    credentials: true,
}));

app.use (compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(800,() => {
    console.log('server listening on http://localhost:800/');
});
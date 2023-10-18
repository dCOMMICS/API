// console.log("WELCOME ERROR")
// console.log("welcome to the party")

import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';


const app = express();

app.use(cors({
    credentials: true,
}));

app.use (compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer();
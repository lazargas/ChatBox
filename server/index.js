import express from 'express';
import Connection from './database/db.js';
import Route from './routes/routes.js';
import bodyParser from 'body-parser';
import cors from 'cors'

const app = express();

app.use(cors());
app.use(bodyParser.json({extended: true}));
app.use('/', Route);

Connection();

const PORT = 8000;

app.listen(PORT, ()=>{
    console.log("server is running");
})
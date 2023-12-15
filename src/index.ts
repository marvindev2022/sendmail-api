import express from 'express';
import cors from 'cors';
import router from './router';
import dotenv from 'dotenv';
import listen from './controller/listen';
dotenv.config();

const app = express();

app.use(cors(),express.json(),router);

app.listen(3000, listen)
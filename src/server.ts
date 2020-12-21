import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';

import routes from './routes';

const app = express();

app.use(cors());

app.use(routes);


app.get('/', (request: Request, response: Response)=> {
  return response.json({ message:'Heello todo list!' })
})


app.listen(3333);
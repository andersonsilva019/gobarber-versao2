import express from 'express';
import bodyParser from 'body-parser';
import router from './routes';

const app = express();

app.use(bodyParser.json());

app.use(router);

app.listen(3333, () => {
  //  eslint-disable-next-line
  console.log('Server started on port 3333');
});

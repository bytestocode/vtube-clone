import express from 'express';
import morgan from 'morgan';
import globalRouter from './routers/globalRouter';
import userRouter from './routers/userRouter';
import videoRouter from './routers/videoRouter';

const PORT = 4000;

const app = express();
const logger = morgan('dev');
app.use(logger);

app.use('/', globalRouter);
app.use('/users', userRouter);
app.use('/videos', videoRouter);

const home = (req, res) => {
  return res.send(
    '<h1>안녕하세요 홈페이지입니다.</h1><p>Node.js 학습중입니다</p>'
  );
};

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);

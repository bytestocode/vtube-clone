import express from "express";

const PORT = 4000;

const app = express();

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

const privateMiddleware = (req, res, next) => {
  const url = req.url;
  if (url === '/protected') {
    return res.send('<h1>Not Allowed</h1>');
  }
  next();
};

const hanldeHome = (req, res, next) => {
  return res.send("<h1>안녕하세요 홈페이지입니다.</h1><p>Node.js 학습중입니다</p>");
};

const handleLogin = (req, res) => {
  return res.send("<h1>Login here.</h1>");
};

app.use(logger);
app.use(privateMiddleware);
app.get("/", hanldeHome);
app.get("/login", handleLogin);

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);

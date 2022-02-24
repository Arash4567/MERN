import express from "express";
import path from "path";
import { requestTime, logger, kv } from './middlewares.js'

const __dirname = path.resolve();
const PORT = process.env.PORT ?? 3000;
const app = express();

app.use(express.static(path.resolve(__dirname, "demo")));
app.use(requestTime)
app.use(logger)

app.get("/yuklash", (req, res) => {
  res.download(path.resolve(__dirname, "demo", "user.html"));
  console.log(`REQUEST_TIME: ${req.requestTime}`);
  console.log(`Daraja: ${kv(5)}`);
});

app.listen(PORT, () => {
  console.log(`Server ${PORT} portda ishga tushdi...`);
});

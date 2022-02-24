import express from "express";
import path from "path";
import { requestTime, logger } from "./middlewares.js";

const __dirname = path.resolve();
const PORT = process.env.PORT ?? 3000;
/* export PORT=5230 && node app.js */
const app = express();

// app.get('/', (req, res) => {
//     res.send('<h1>Hello Express</h1>')
// });

/* ROUTING */

// https://github.com/Arsh4567/MERN

/* app.get('/', (req, res) => {
    res.sendFile(
        path.resolve(__dirname, 'templates', 'index.html')
    )
}); */

// app.get('/user', (req, res) => {
//     res.sendFile(
//         path.resolve(__dirname, 'templates', 'user.html')
//     )
// });

// app.get('/download', (req, res) => {
//     res.download(
//         path.resolve(__dirname, 'templates', 'user.html')
//     )
// });

/* Yanada optimalroq Nodejs server qurish */
/* app.use() funksiyasi middleware bo`lgan funksiyalrani qabul qiladi! */

// app.use(express.static(path.resolve(__dirname, "templates")));
// app.use(requestTime);
// app.use(logger);

// app.get("/download", (req, res) => {
//   console.log(req.requestTime);
//   res.download(path.resolve(__dirname, "templates", "user.html"));
// });

/* EJS - Embedded JavaScript */
app.set('view engine', 'ejs')
// console.log(app.get('views'));
app.set('views', path.resolve(__dirname, "ejs"))
// console.log(app.get('views'));

app.use(express.static(path.resolve(__dirname, "ejs")));
app.use(requestTime);
app.use(logger);

// app.get('/', (req, res) => {
//     res.render('index');
// });

// app.get('/user', (req, res) => {
//     res.render('user');
// });

app.get('/', (req, res) => {
    res.render('index', {title: 'Home Page', home: 'EJS is powerfull!'});
});

app.get('/user', (req, res) => {
    res.render('user', {title: 'User Page', username: 'Jack'});
});

/* TODO: KITOB sotagidan sayt yaratamiz! */

app.listen(PORT, () => {
  console.log(`Server ${PORT} da ishga tushdi...`);
});

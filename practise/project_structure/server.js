const express = require("express");
const userRoutes = require("./routes/user.routes.js");
const app = express();

const PORT = 5000;

/* ***** ROUTES ***** */

app.use('/api', userRoutes)

app.listen(PORT, "127.0.0.1", () => {
  console.log(`Server ${PORT} da ishga tushdi...`);
});
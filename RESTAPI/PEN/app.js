const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

require("dotenv").config();
PORT = process.env.PORT || 8000;
const app = express();

// * Middlewares

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// * Import Routes

const userRoutes = require("./routes/user.routes");

// * Routes Middlewares

app.use("/api/users", userRoutes);

app.listen(PORT, () => console.log(`Server ${PORT} chi portda ishga tushdi!`));

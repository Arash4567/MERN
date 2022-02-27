import express from "express";
import path from "path";

const __dirname = path.resolve();
const PORT = process.env.PORT ?? 3000;

const app = express();

app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "demo"));

app.use(express.static(path.resolve(__dirname, "demo")));

app.get("/", (req, res) => {
  res.render("index", {
    title: "Home Page",
    status: "home",
    servers: [
      { id: "1", name: "AWS", status: "working" },
      { id: "2", name: "Google Cloud", status: "working" },
      { id: "3", name: "Yandex Cloud", status: "working" },
      { id: "4", name: "Microsoft", status: "working" },
    ],
    fruits: [
      "apple",
      "orange",
      "banana"
    ],
  });
});

app.get("/login", (req, res) => {
  res.render("login", { title: "Login Page", status: "login" });
});

app.listen(PORT, () => {
  console.log(`Server ${PORT} da ishga tushdi...`);
});

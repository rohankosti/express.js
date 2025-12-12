import express from "express";
import path from "path";
import { fileURLToPath } from "url";
const app = express();

const filpath = fileURLToPath(import.meta.url);
console.log(filpath);

const dirpath = path.dirname(filpath);
console.log(dirpath);

const final = path.join(dirpath, "./public/index.html");
console.log(final);

// app.get("/", (req, res) => {
//   res.sendFile(final);
// });

// app.get("/demo", (req, res) => {
//   const demoPath = path.join(dirpath, "./public/demo.html");
//   res.sendFile(demoPath);
// });

app.use(express.static('Public'));

app.get("/demo", (req, res) => {
    res.sendFile(path.join(dirpath, "public/demo.html"));
});


app.listen(3000, () => {
  console.log(`Server are runnig on port http://localhost:3000`);
});

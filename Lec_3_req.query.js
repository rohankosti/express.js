import express from "express";
const app = express();

// req.params route ke andar se data leta hai (mandatory)
// req.query URL ke query string se data leta hai (optional)

// 🔹 Example URL: Query
// /about?category=mobile&price=20000 agar url aise hai to
app.get("/about", (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

// 🔹 Example URL: Params
// /about/12345 agar url aise hai to
app.get("/about/:id", (req, res) => {
  console.log(req.params);
  res.send(req.params);
});

app.listen(3000, () => {
  console.log("Server is running on port http://localhost:3000");
});

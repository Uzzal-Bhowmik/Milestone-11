const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

app.use(cors());

// users data
const users = [
  { id: 1, name: "Uzzal", age: 20 },
  { id: 2, name: "Bura Kaka", age: 70 },
  { id: 3, name: "Middle age man", age: 30 },
];

app.get("/", (req, res) => {
  res.send("Users Management server is running");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.listen(port, () => {
  console.log("server is running on port: ", port);
});

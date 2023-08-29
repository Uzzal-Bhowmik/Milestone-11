const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

// middleware
app.use(cors());
app.use(express.json());

// users data
const users = [
  { id: 1, name: "Uzzal", age: 20 },
  { id: 2, name: "Bura Kaka", age: 70 },
  { id: 3, name: "Middle age man", age: 30 },
];

app.get("/", (req, res) => {
  res.send("Users Management server is running");
});

// users get method
app.get("/users", (req, res) => {
  res.send(users);
});

// users post method
app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);

  res.send(newUser);
});

app.listen(port, () => {
  console.log("server is running on port: ", port);
});

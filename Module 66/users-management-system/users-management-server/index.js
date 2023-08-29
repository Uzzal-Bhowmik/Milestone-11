const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const users = require("./data/users.json");

// middleware
app.use(cors());
app.use(express.json());

// get methods
app.get("/", (req, res) => {
  res.send("Users management server is up and running");
});

app.get("/users", (req, res) => {
  res.send(users);
});

// post methods

app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = users.length + 1;

  // server side data handling
  users.push(newUser);

  // client side data handling
  res.send(newUser);
});

// listen port
app.listen(port, () => {
  console.log("Server is running on port: ", port);
});

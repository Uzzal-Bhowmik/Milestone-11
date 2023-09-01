const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("User management Server is up and running");
});

app.listen(port, () => {
  console.log("User management server is running on port: ", port);
});

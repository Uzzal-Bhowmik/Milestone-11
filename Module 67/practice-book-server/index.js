const express = require("express");
const cors = require("cors");
const app = express();
const { MongoClient, ServerApiVersion } = require("mongodb");
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = "mongodb://127.0.0.1:27017";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();

    const bookCollection = client.db("booksDB").collection("bookCollection");

    app.get("/books", async (req, res) => {
      const cursor = bookCollection.find();
      const books = await cursor.toArray();
      res.send(books);
    });

    app.post("/books", async (req, res) => {
      const newBook = req.body;

      const result = await bookCollection.insertOne(newBook);

      res.send(newBook);
    });

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.log);

// get methods
app.get("/", (req, res) => {
  res.send("<h1>Book Server is up and running</h1>");
});

app.listen(port, () => {
  console.log("server is running on port: ", port);
});

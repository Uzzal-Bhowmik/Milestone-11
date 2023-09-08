const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(express.json());
app.use(cors());

// mongo db
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.5732rtt.mongodb.net/?retryWrites=true&w=majority`;

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

    const eventCollection = client
      .db("volunteerNetworkDB")
      .collection("events");

    const registeredEventCollection = client
      .db("volunteerNetworkDB")
      .collection("registeredEvents");

    // events get method
    app.get("/events", async (req, res) => {
      const result = await eventCollection.find().toArray();
      res.send(result);
    });

    // single event get method
    app.get("/events/:id", async (req, res) => {
      const id = req.params.id;
      const result = await eventCollection.findOne({ _id: new ObjectId(id) });
      res.send(result);
    });

    // events register get method
    app.get("/registeredEvents", async (req, res) => {
      const result = await registeredEventCollection.find().toArray();
      res.send(result);
    });

    // events register get method based on query
    app.get("/registeredEvents", async (req, res) => {
      const query = req.query;
      const result = await registeredEventCollection
        .find({ email: query.email })
        .toArray();

      console.log(result);
    });

    // events register post method
    app.post("/registeredEvents", async (req, res) => {
      const body = req.body;
      const result = await registeredEventCollection.insertOne(body);
      res.send(result);
    });

    // registered event delete method
    app.delete("/registeredEvents/:id", async (req, res) => {
      const id = req.params.id;
      const result = await registeredEventCollection.deleteOne({
        _id: new ObjectId(id),
      });
      res.send(result);
    });

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

// ----------------------------

app.get("/", (req, res) => {
  res.send("Volunteer Network server is up and running.");
});

app.listen(port, () => {
  console.log("server is running on port: ", port);
});

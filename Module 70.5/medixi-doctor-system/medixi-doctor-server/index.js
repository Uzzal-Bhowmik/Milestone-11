const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

// mongodb
const uri = "mongodb://127.0.0.1:27017";

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

    const doctorCollection = client.db("medixiDoctorsDB").collection("doctors");
    const appointCollection = client
      .db("appointsDB")
      .collection("appointCollection");

    app.get("/doctors", async (req, res) => {
      const data = await doctorCollection.find({}).toArray();
      res.send(data);
    });

    app.get("/doctors/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await doctorCollection.findOne(query);

      res.send(result);
    });

    app.post("/appointments", async (req, res) => {
      const body = req.body;
      const result = await appointCollection.insertOne(body);
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Medixi Server is up and running");
});

app.listen(port, () => {
  console.log("server is running on port: ", port);
});

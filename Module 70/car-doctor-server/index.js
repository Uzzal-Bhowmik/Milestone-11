const express = require("express");
const cors = require("cors");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.5732rtt.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// jwt token vefiy
const verifyJWT = (req, res, next) => {
  const authorization = req.headers.authorization;

  if (!authorization) {
    return res
      .status(401)
      .send({ error: true, message: "Unauthorized Access" });
  }

  const token = authorization.split(" ")[1];

  jwt.verify(token, process.env.JWT_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res
        .status(403)
        .send({ error: true, message: "unauthorized access" });
    }
    req.decoded = decoded;
    next();
  });
};

async function run() {
  try {
    await client.connect();

    const serviceCollection = client.db("carDoctorDB").collection("services");
    const bookingCollection = client
      .db("bookedServicesDB")
      .collection("bookings");

    // jwt methods
    app.post("/jwt", (req, res) => {
      const user = req.body;
      const token = jwt.sign(user, process.env.JWT_TOKEN_SECRET, {
        expiresIn: "1h",
      });

      // since token is string, it's better to convert to JSON format
      res.send({ token });
    });

    // services get methods
    app.get("/services", async (req, res) => {
      const cursor = serviceCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    app.get("/services/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const options = {
        projection: {
          service_id: 1,
          title: 1,
          img: 1,
          price: 1,
          description: 1,
        },
      };

      const result = await serviceCollection.findOne(query, options);
      res.send(result);
    });

    // bookings get method
    app.get("/bookings", verifyJWT, async (req, res) => {
      // console.log(req.headers.authorization);

      const bookingEmail = req.query.email;
      let query = {};
      if (bookingEmail) {
        query = { email: bookingEmail };
      }
      const bookings = await bookingCollection.find(query).toArray();
      res.send(bookings);
    });

    // bookings post method
    app.post("/bookings", async (req, res) => {
      const booking = req.body;
      const result = await bookingCollection.insertOne(booking);
      res.send(result);
    });

    // booking patch method
    app.patch("/bookings/:id", async (req, res) => {
      const id = req.params.id;
      const body = req.body;
      const filter = { _id: new ObjectId(id) };
      const updatedBooking = {
        $set: {
          status: body.status,
        },
      };

      const result = await bookingCollection.updateOne(filter, updatedBooking);
      res.send(result);
    });

    // bookings delete method
    app.delete("/bookings/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await bookingCollection.deleteOne(query);

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
  res.send("Car doctor server is up and running");
});

app.listen(port, () => {
  console.log("Car doctor server is running");
});

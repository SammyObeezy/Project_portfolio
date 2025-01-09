require("dotenv").config(); // Load environment variables from .env

const express = require("express");
const app = express();
const port = process.env.PORT || 5000; 
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const allowedOrigins = [
  'https://project-portfolio-frontend-wine.vercel.app', 
  'http://localhost:5173'
];

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type'],
};

app.use(cors(corsOptions));

// Middleware
// app.use(cors());
app.use(express.json());

// MongoDB configuration
const uri = process.env.MONGODB_URI; // Use the MONGODB_URI from .env
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// Initial route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Main function to manage database operations
async function run() {
  try {
    await client.connect();

    // Database and collections
    const db = client.db("BookInventory");
    const blogCollections = db.collection("blogs");
    const bookCollections = db.collection("books");
    const rentalCollections = db.collection("rentals");

    // Book Routes
    app.post("/upload-book", async (req, res) => {
      try {
        const data = req.body;
        const result = await bookCollections.insertOne(data);
        res.status(201).send(result);
      } catch (error) {
        res.status(500).send({ message: "Failed to upload book", error });
      }
    });

    app.get("/all-books", async (req, res) => {
      try {
        const books = await bookCollections.find().toArray();
        res.send(books);
      } catch (error) {
        res.status(500).send({ message: "Failed to retrieve books", error });
      }
    });

    app.get("/book/:id", async (req, res) => {
      try {
        const id = req.params.id;
        const book = await bookCollections.findOne({ _id: new ObjectId(id) });
        if (!book) return res.status(404).send({ message: "Book not found" });
        res.send(book);
      } catch (error) {
        res.status(500).send({ message: "Failed to retrieve book", error });
      }
    });

    app.patch("/book/:id", async (req, res) => {
      try {
        const id = req.params.id;
        const updateBookData = req.body;
        const result = await bookCollections.updateOne(
          { _id: new ObjectId(id) },
          { $set: updateBookData },
          { upsert: true }
        );
        res.send(result);
      } catch (error) {
        res.status(500).send({ message: "Failed to update book", error });
      }
    });

    app.delete("/book/:id", async (req, res) => {
      try {
        const id = req.params.id;
        const result = await bookCollections.deleteOne({
          _id: new ObjectId(id),
        });
        res.send(result);
      } catch (error) {
        res.status(500).send({ message: "Failed to delete book", error });
      }
    });

    // Blog Routes
    app.post("/blogs", async (req, res) => {
      try {
        const blogPost = req.body;
        const result = await blogCollections.insertOne(blogPost);
        res.status(201).send(result);
      } catch (error) {
        res.status(500).send({ message: "Failed to upload blog", error });
      }
    });

    app.get("/blogs", async (req, res) => {
      try {
        const blogs = await blogCollections.find().toArray();
        res.send(blogs);
      } catch (error) {
        res.status(500).send({ message: "Failed to retrieve blogs", error });
      }
    });

    app.get("/blog/:id", async (req, res) => {
      try {
        const id = req.params.id;
        const blog = await blogCollections.findOne({ _id: new ObjectId(id) });
        if (!blog) return res.status(404).send({ message: "Blog not found" });
        res.send(blog);
      } catch (error) {
        res.status(500).send({ message: "Failed to retrieve blog", error });
      }
    });

    app.patch("/blog/:id", async (req, res) => {
      try {
        const id = req.params.id;
        const updateBlogData = req.body;
        const result = await blogCollections.updateOne(
          { _id: new ObjectId(id) },
          { $set: updateBlogData },
          { upsert: true }
        );
        res.send(result);
      } catch (error) {
        res.status(500).send({ message: "Failed to update blog", error });
      }
    });

    app.delete("/blog/:id", async (req, res) => {
      try {
        const id = req.params.id;
        const result = await blogCollections.deleteOne({
          _id: new ObjectId(id),
        });
        res.send(result);
      } catch (error) {
        res.status(500).send({ message: "Failed to delete blog", error });
      }
    });

    // Rental Routes
    app.post("/upload-rental", async (req, res) => {
      try {
        const rentalData = req.body;
        const result = await rentalCollections.insertOne(rentalData);
        console.log("Rental successfully uploaded:", result); // Log success
        res.status(201).send(result); // Send success response
      } catch (error) {
        console.error("Error during rental upload:", error); // Log error details
        res.status(500).send({ message: "Failed to upload rental", error });
      }
    });

    app.get("/available-rentals", async (req, res) => {
      try {
        const query = req.query.location
          ? { location: req.query.location }
          : {};
        const availableRentals = await rentalCollections.find(query).toArray();
        res.send(availableRentals);
      } catch (error) {
        res.status(500).send({ message: "Failed to retrieve rentals", error });
      }
    });

    app.post("/rent-book/:id", async (req, res) => {
      try {
        const rentalId = req.params.id;
        const renterData = req.body;

        const rental = await rentalCollections.findOne({
          _id: new ObjectId(rentalId),
        });
        if (!rental)
          return res.status(404).send({ message: "Rental book not found" });
        if (rental.status === "rented")
          return res.status(400).send({ message: "Book is currently rented" });

        const rentalCost = rental.price * renterData.duration;
        await rentalCollections.updateOne(
          { _id: new ObjectId(rentalId) },
          {
            $set: {
              status: "rented",
              rentedBy: renterData.userId,
              rentalEndDate: new Date(
                Date.now() + renterData.duration * 86400000
              ),
            },
          }
        );

        res.send({ message: "Book rented successfully", rentalCost });
      } catch (error) {
        res.status(500).send({ message: "Failed to rent book", error });
      }
    });

    app.post("/return-book/:id", async (req, res) => {
      try {
        const rentalId = req.params.id;

        const rental = await rentalCollections.findOne({
          _id: new ObjectId(rentalId),
        });
        if (!rental || rental.status !== "rented") {
          return res
            .status(400)
            .send({ message: "Book is not currently rented" });
        }

        await rentalCollections.updateOne(
          { _id: new ObjectId(rentalId) },
          { $set: { status: "available", rentedBy: null, rentalEndDate: null } }
        );

        res.send({ message: "Book returned successfully" });
      } catch (error) {
        res.status(500).send({ message: "Failed to return book", error });
      }
    });

    // MongoDB Ping
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged MongoDB deployment successfully!");
  } finally {
    // Keep the client open for continuous server operations
  }
}

run().catch(console.dir);

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


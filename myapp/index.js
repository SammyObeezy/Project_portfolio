const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

//middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//mongodb configuration

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri =
  "mongodb+srv://project-book-store:4RqMpYWskXoQD6ve@cluster0.pbxpkpz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

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
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

     // Book and Blog collections
     const blogCollections = client.db("BookInventory").collection("blogs");
    //create a collection of documents
    const bookCollections = client.db("BookInventory").collection("books");

    //insert a book to the database using post method

    app.post("/upload-book", async (req, res) => {
      const data = req.body;
      const result = await bookCollections.insertOne(data);
      res.send(result);
    });

    // get all books from the database
    app.get("/all-books", async (req, res) => {
      const books = bookCollections.find();
      const result = await books.toArray();
      res.send(result);
    });

    // update a book dta : patch or update method
    app.patch("/book/:id", async (req, res) => {
      const id = req.params.id;
      //console.log(id);
      const updateBookData = req.body;
      const filter = { _id: new ObjectId(id) };
      const updateDoc = {
        $set: {
          ...updateBookData,
        },
      };
      const options = { upsert: true };
      //update
      const result = await bookCollections.updateOne(
        filter,
        updateDoc,
        options
      );
      res.send(result);
    });
    // delete a book data
    app.delete("/book/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await bookCollections.deleteOne(filter);
      res.send(result);
    });

    //find category
    app.get("/all-books", async (req, res) => {
      let query = {};
      if (req.query?.category) {
        query = { category: req.query.category };
      }
      const result = await bookCollections.find(query).toArray();
      res.send(result);
    });
    //to get single book data
    app.get("/book/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await bookCollections.findOne(filter);
      res.send(result);
    });

    // Blogs section
    app.post("/blogs", async (req, res) => {
      const blogPost = req.body;
      const result = await blogCollections.insertOne(blogPost);
      res.send(result)
    })
    // Get all blog posts
    app.get("/blogs", async (req, res) => {
      const blogs = blogCollections.find();
      const result = await blogs.toArray();
      res.send(result)
    })
   // Get a single blog post by ID
   app.get("/blog/:id", async (req, res) => {
    const id = req.params.id;
    const filter = { _id: new ObjectId(id) };
    const result = await blogCollections.findOne(filter); // Find blog post by ID
    res.send(result); // Send found blog post back to client
  });

  // Update a blog post by ID using PATCH
  app.patch("/blog/:id", async (req, res) => {
    const id = req.params.id;
    const updateBlogData = req.body; // Data sent from the client to update the blog
    const filter = { _id: new ObjectId(id) };
    const updateDoc = {
      $set: {
        ...updateBlogData,
      },
    };
    const options = { upsert: true }; // Create new if not exists
    const result = await blogCollections.updateOne(filter, updateDoc, options);
    res.send(result); // Send response back to client
  });

  // Delete a blog post by ID
  app.delete("/blog/:id", async (req, res) => {
    const id = req.params.id;
    const filter = { _id: new ObjectId(id) };
    const result = await blogCollections.deleteOne(filter); // Delete blog post by ID
    res.send(result); // Send deletion status back to client
  }); 
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    //await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

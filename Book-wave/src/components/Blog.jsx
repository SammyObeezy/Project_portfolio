import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaUser } from "react-icons/fa"; // Importing Font Awesome User icon

const Blog = () => {
  // State to store blog data
  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(""); // State to handle the image
  const [isEditing, setIsEditing] = useState(false);
  const [editingBlogId, setEditingBlogId] = useState(null);

  // Function to calculate reading time (assuming an average reading speed)
  const calculateReadingTime = (content) => {
    const wordsPerMinute = 200; // Average reading speed
    const words = content.split(" ").length;
    const time = Math.ceil(words / wordsPerMinute);
    return time;
  };

  // Fetch blogs from the backend
  const fetchBlogs = async () => {
    try {
      const response = await axios.get("http://localhost:5000/blogs");
      setBlogs(response.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  // Fetch blogs when component mounts
  useEffect(() => {
    fetchBlogs();
  }, []);

  // Handle form submission to create or update blog
  const handleSubmit = async (e) => {
    e.preventDefault();

    const blogData = { title, content, author, category, image };

    try {
      if (isEditing) {
        await axios.patch(
          `http://localhost:5000/blog/${editingBlogId}`,
          blogData
        );
        setIsEditing(false);
        setEditingBlogId(null);
      } else {
        await axios.post("http://localhost:5000/blogs", blogData);
      }

      setTitle("");
      setContent("");
      setAuthor("");
      setCategory("");
      setImage(""); // Reset image state
      fetchBlogs();
    } catch (error) {
      console.error("Error saving blog:", error);
    }
  };

  // Handle editing a blog post
  const handleEdit = (blog) => {
    setTitle(blog.title);
    setContent(blog.content);
    setAuthor(blog.author);
    setCategory(blog.category);
    setImage(blog.image); // Load the image for editing
    setIsEditing(true);
    setEditingBlogId(blog._id);
  };

  // Handle deleting a blog post
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/blog/${id}`);
      fetchBlogs();
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 md:px-10">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
        Blogs Section
      </h1>

      {/* Blog Form */}
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6 mb-8 border border-gray-200">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Title:
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Content:
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              rows="4"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Author:
            </label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Category:
            </label>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Image URL:
            </label>
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-md transition duration-300"
          >
            {isEditing ? "Update Blog" : "Create Blog"}
          </button>
        </form>
      </div>

      {/* Blog List */}
      <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">
        All Blogs
      </h2>
      {blogs.length === 0 ? (
        <p className="text-center text-gray-500">No blogs available</p>
      ) : (
        <ul className="grid grid-cols-1 gap-6 max-w-3xl mx-auto">
          {blogs.map((blog) => (
            <li
              key={blog._id}
              className="bg-white shadow-xl rounded-lg p-6 border border-blue-200 hover:shadow-2xl transition duration-300"
            >
              {/* Blog content */}
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
              <div className="flex flex-col mb-4">
                <h3 className="text-2xl font-bold mb-2 text-gray-800">
                  {blog.title}
                </h3>
                <div className="flex items-center mb-2">
                  <FaUser className="text-gray-500 mr-1" />
                  <span className="text-gray-500">{blog.author}</span>
                  <span className="ml-4">
                    <span className="bg-red-600 text-white font-semibold px-3 py-1">
                      {blog.category}
                    </span>
                  </span>
                </div>
                <div className="border-b border-gray-300 my-2"></div>
                <p className="text-gray-700 mb-4">
                  {blog.content.split("\n").slice(0, 6).join("\n")}...
                </p>
                <p className="text-gray-500 mb-2">
                  {calculateReadingTime(blog.content)} minute read
                </p>
                <button
                  className="text-blue-600 hover:underline mb-2"
                  onClick={() =>
                    console.log("Read More clicked for:", blog._id)
                  }
                >
                  Read More
                </button>
              </div>

              {/* Buttons in a flex container */}
              <div className="flex justify-between">
                <button
                  onClick={() => handleEdit(blog)}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-1 px-3 rounded-md transition duration-300"
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(blog._id)}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-3 rounded-md transition duration-300"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Blog;

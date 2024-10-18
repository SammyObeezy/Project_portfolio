import React, { useState, useEffect } from "react";
import axios from "axios";

const Blog = () => {
  // State to store blog data
  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editingBlogId, setEditingBlogId] = useState(null);

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

    const blogData = { title, content, author, category };

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
        <ul className="grid grid-cols-1 gap-4 max-w-3xl mx-auto">
          {blogs.map((blog) => (
            <li
              key={blog._id}
              className="bg-white shadow-lg rounded-lg p-6 border border-gray-200"
            >
              {/* Blog content */}
              <div className="flex flex-col mb-4">
                <h3 className="text-2xl font-bold mb-2 text-gray-800">
                  {blog.title}
                </h3>
                <small className="block text-gray-500 mb-2">
                  Author: {blog.author} | Category: {blog.category}
                </small>
                <p className="text-gray-700 mb-4">
                  {blog.content.substring(0, 100)}...
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

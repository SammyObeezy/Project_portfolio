import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Blog = () => {
  // State to store blog data
  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editingBlogId, setEditingBlogId] = useState(null);

  // Fetch blogs from the backend
  const fetchBlogs = async () => {
    try {
      const response = await axios.get('http://localhost:5000/blogs');
      setBlogs(response.data);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  };

  // Fetch blogs when component mounts
  useEffect(() => {
    fetchBlogs();
  }, []);

  // Handle form submission to create or update blog
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const blogData = { title, content, author };
  
    try {
      if (isEditing) {
        await axios.patch(`http://localhost:5000/blog/${editingBlogId}`, blogData);
        setIsEditing(false);
        setEditingBlogId(null);
      } else {
        await axios.post('http://localhost:5000/blogs', blogData); // Correct endpoint
      }
  
      setTitle('');
      setContent('');
      setAuthor('');
      fetchBlogs();
    } catch (error) {
      console.error('Error saving blog:', error);
    }
  };
  

  // Handle editing a blog post
  const handleEdit = (blog) => {
    setTitle(blog.title);
    setContent(blog.content);
    setAuthor(blog.author);
    setIsEditing(true);
    setEditingBlogId(blog._id);
  };

  // Handle deleting a blog post
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/blog/${id}`);
      fetchBlogs();
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  };

  return (
    <div className="mt-10 min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Blogs Section</h1>

      {/* Blog Form */}
      <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6 mb-8">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Content:</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Author:</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 rounded-md transition duration-300"
          >
            {isEditing ? 'Update Blog' : 'Create Blog'}
          </button>
        </form>
      </div>

      {/* Blog List */}
      <h2 className="text-2xl font-bold mb-4 text-center">All Blogs</h2>
      {blogs.length === 0 ? (
        <p className="text-center text-gray-500">No blogs available</p>
      ) : (
        <ul className="grid grid-cols-1 gap-4 max-w-3xl mx-auto">
        {blogs.map((blog) => (
          <li key={blog._id} className="bg-white shadow-md rounded-lg p-6">
            {/* Blog content */}
            <div className="flex flex-col mb-4">
              <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
              <p className="text-gray-700 mb-4">{blog.content}</p>
              <small className="block text-gray-500">Author: {blog.author}</small>
            </div>
      
            {/* Buttons in a flex container */}
            <div className="flex justify-between">
              <button
                onClick={() => handleEdit(blog)}
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-1 px-3 rounded-md"
              >
                Edit
              </button>
      
              <button
                onClick={() => handleDelete(blog._id)}
                className="bg-red-600 hover:bg-black text-white font-bold py-1 px-3 rounded-md"
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

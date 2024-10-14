import React, { useEffect, useState } from "react";
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";

const Shop = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("http://localhost:5000/all-books");
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  // Function to truncate text
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <h2 className="text-5xl font-bold text-center text-gray-800 mb-8">
        Find Your Next Read Here
      </h2>
      {/* Adjusted grid layout */}
      <div className="grid gap-3 px-4 lg:px-24 my-12 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 grid-cols-2">
        {books.map((book) => (
          <Card
            key={book._id}
            className="shadow-lg rounded-lg transition duration-300 hover:shadow-xl"
          >
            {/* Image adjusted to be square */}
            <div className="w-full h-64">
              <img
                src={book.imageURL}
                alt={book.bookTitle}
                className="h-full w-full object-cover rounded-t-lg"
              />
            </div>
            <div className="p-6">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                {book.bookTitle}
              </h5>
              <p className="font-normal mb-4 text-gray-700">
                {truncateText(book.bookDescription, 50)}{" "}
                {/* Limit to 200 characters */}
              </p>
              <Link
                to={`/book/${book._id}`}
                className="bg-red-500 font-semibold text-white py-2 px-6 rounded text-center w-full transition duration-300 hover:bg-orange-600"
              >
                Get A Copy
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Shop;

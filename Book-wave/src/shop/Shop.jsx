import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaShoppingCart, FaDownload } from "react-icons/fa";

const Shop = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="my-16 px-4 lg:px-12">
      {/* Title Section */}
      <h2 className="text-5xl font-extrabold text-center mb-16 mt-24 text-gray-900">
        Discover Our Selection of Must-Read Books
      </h2>

      {/* Grid Container for Book Items */}
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8">
        {books.map((book) => (
          <div
            key={book._id}
            className="relative group p-3 shadow-md hover:shadow-lg transition-shadow duration-300 bg-white rounded-md min-w-[200px]" // Added min-width for wider containers
          >
            <Link to={`/book/${book._id}`}>
              <img
                src={book.imageURL}
                alt={book.bookTitle}
                className="w-full h-[250px] object-fit "
              />
            </Link>

            {/* Action Icons - Container Changes on Hover */}
            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex flex-col space-y-2">
                {/* Button container */}
                <button className="p-1 rounded-full border border-red-500 group-hover:bg-red-500 transition-all duration-300 hover:bg-white">
                  <FaHeart
                    className="fill-red-500 text-red-500 group-hover:fill-white hover:fill-red-500 hover:text-red-500"
                    size={18}
                  />
                </button>
                <button className="p-1 rounded-full border border-red-500 group-hover:bg-red-500 transition-all duration-300 hover:bg-white">
                  <FaShoppingCart
                    className="fill-red-500 text-red-500 group-hover:fill-white hover:fill-red-500 hover:text-red-500"
                    size={18}
                  />
                </button>
                <button className="p-1 rounded-full border border-red-500 group-hover:bg-red-500 transition-all duration-300 hover:bg-white">
                  <FaDownload
                    className="fill-red-500 text-red-500 group-hover:fill-white hover:fill-red-500 hover:text-red-500"
                    size={18}
                  />
                </button>
              </div>
            </div>

            {/* Book Details with Larger Text */}
            <div className="text-left mt-2">
              <h3 className="text-md lg:text-lg font-bold text-gray-900">
                {book.bookTitle}
              </h3>
              <p className="text-sm lg:text-md text-gray-500">
                {book.downloads
                  ? `${book.downloads} downloads`
                  : "No downloads yet"}
              </p>
              
              <p className="text-sm lg:text-md text-gray-600">
                {book.authorName}
              </p>

              {/* View Details Button */}
              <Link to={`/book/${book._id}`}>
                <button className="mt-3 w-full px-3 py-2 text-sm bg-red-600 text-white rounded-md hover:bg-black transition duration-300">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;

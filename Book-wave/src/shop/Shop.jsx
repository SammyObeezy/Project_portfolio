import React, { useEffect, useState } from "react";
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";

const Shop = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  // Function to truncate text
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };

  return (
    <div className="mt-28 px-4 lg:px-24">
      <h2 className="text-5xl font-bold text-center">All Books are Here</h2>
      <div className="grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1">
        {books.map((book) => (
          <>
            {" "}
            <Card className="max-w-sm p-4 shadow-lg">
              <img
                src={book.imageURL}
                alt={book.bookTitle}
                className="h-48 w-full object-contain rounded-md"
              />
              <h5 className="mt-4 mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                {book.bookTitle}
              </h5>
              <p className="font-normal text-sm text-gray-700 dark:text-gray-400 mb-4">
                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
              </p>
              <Link
                to={`/book/${book._id}`}
                className="bg-orange-500 font-semibold text-white py-2 px-4 rounded hover:bg-orange-600"
              >
                Get A Copy
              </Link>
            </Card>


          </>
        ))}
      </div>
    </div>
  );
};

export default Shop;

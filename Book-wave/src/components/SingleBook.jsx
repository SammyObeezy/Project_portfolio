import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleBook = () => {
  const { id } = useParams(); // Get the book ID from the URL
  const [book, setBook] = useState(null); // State to hold book data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch book details when component mounts or ID changes
  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await fetch(`http://localhost:5000/book/${id}`);

        // Check if response is okay
        if (!response.ok) {
          throw new Error("Failed to fetch book data");
        }

        // Parse response to JSON
        const data = await response.json();
        console.log("Fetched book data:", data); // Debugging log

        // Set the book data and stop loading
        setBook(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching book:", err); // Log any errors
        setError(err.message);
        setLoading(false); // Stop loading in case of error
      }
    };

    fetchBook();
  }, [id]); // Run when the book ID changes

  // Display loading message while fetching data
  if (loading) {
    return <div className="text-center mt-28">Loading...</div>;
  }

  // Display error message if there is an error
  if (error) {
    return <div className="text-center mt-28 text-red-500">Error: {error}</div>;
  }

  // Display message if no book is found
  if (!book) {
    return <div className="text-center mt-28">No book found</div>;
  }

  // Destructure the book data
  const {
    bookTitle,
    authorName,
    imageURL,
    bookDescription,
    category,
    bookPdfUrl,
    price,
  } = book;

  // Render the book details
  return (
    <div className="flex flex-col mt-28 lg:flex-row p-5 rounded-lg w-full h-full">
      {/* Book image */}
      <div className="lg:w-1/2 xl:w-1/3 p-4 lg:p-12">
        <img src={imageURL} alt={bookTitle} className="h-96 mb-4" />
      </div>

      {/* Book details */}
      <div className="lg:w-1/2 xl:w-2/3 p-4 lg:p-12">
        <h1 className="text-2xl font-bold mb-3">{bookTitle}</h1>
        <p className="text-lg font-semibold text-gray-700 mb-2">
          Author: {authorName}
        </p>
        <p className="text-md font-semibold text-gray-600 mb-2">
          Category: {category}
        </p>
        <div
          className="text-lg text-gray-600 mb-5"
          dangerouslySetInnerHTML={{ __html: bookDescription }} // Render HTML safely
        />
        <a
          href={bookPdfUrl}
          download
          className="bg-orange-500 text-white px-4 py-3 rounded-md text-base hover:bg-orange-600 w-max"
        >
          Download PDF
        </a>
        <p className="text-lg font-semibold text-gray-700 mb-2">
          Price: {price}
        </p>

        {/* Link to the book PDF */}
        {bookPdfUrl && (
          <a
            href={bookPdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 text-white px-4 py-3 rounded-md text-base hover:bg-orange-600 w-max inline-block"
          >
            View PDF
          </a>
        )}
      </div>
    </div>
  );
};

export default SingleBook;

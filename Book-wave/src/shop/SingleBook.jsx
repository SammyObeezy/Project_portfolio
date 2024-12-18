import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaShoppingCart, FaBookOpen, FaDownload } from "react-icons/fa"; // Icons
import BookReader from "./BookReader"; // Book reading component
import "./SingleBook.css"; // Import CSS for styling

const SingleBook = () => {
  const { id } = useParams(); // Get the book ID from the URL
  const [book, setBook] = useState(null); // State to hold book data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const [readingMode, setReadingMode] = useState(false); // State for reading mode
  const [readingProgress, setReadingProgress] = useState(0); // Reading progress
  const [review, setReview] = useState(""); // State for user review
  const [rating, setRating] = useState(0); // State for user rating
  const [reviews, setReviews] = useState([]); // State to hold reviews

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
        setBook(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchBook();
  }, [id]);

  // Handle Reading Mode and Progress
  const handleReadBook = () => {
    setReadingMode(true); // Open reading mode
  };

  const handleReadingProgress = (progress) => {
    setReadingProgress(progress); // Update reading progress
  };

  // Handle review submission
  const handleReviewSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    const newReview = { review, rating };
    setReviews((prevReviews) => [...prevReviews, newReview]); // Add new review
    setReview(""); // Clear review input
    setRating(0); // Reset rating
  };

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
  } = book;

  // Determine badge based on reading progress
  let badge;
  let badgeIcon;
  if (readingProgress === 100) {
    badge = "Gold Badge";
    badgeIcon = "🏆"; // Gold badge icon
  } else if (readingProgress >= 70) {
    badge = "Diamond Badge";
    badgeIcon = "💎"; // Diamond badge icon
  } else if (readingProgress < 50) {
    badge = "Bronze Badge";
    badgeIcon = "🥉"; // Bronze badge icon
  }

  // Render the book details
  return (
    <div className="flex flex-col lg:flex-row p-5 rounded-lg bg-white shadow-lg mx-auto max-w-5xl mt-10">
      {/* Book image */}
      <div className="lg:w-1/2 p-4 flex justify-center">
        <img
          src={imageURL}
          alt={bookTitle}
          className="h-96 rounded-lg shadow-md object-cover"
        />
      </div>

      {/* Book details */}
      <div className="lg:w-1/2 p-4 flex flex-col justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2 text-red-600">{bookTitle}</h1>
          <p className="text-lg font-semibold text-gray-700 mb-1">
            Author: <span className="font-normal">{authorName}</span>
          </p>
          <p className="text-md font-semibold text-gray-600 mb-1">
            Category: <span className="font-normal">{category}</span>
          </p>
          <div
            className="text-lg text-gray-600 mb-5"
            dangerouslySetInnerHTML={{ __html: bookDescription }}
          />

          {/* Display progress and badge */}
          <div className="mt-4">
            <p>Reading Progress: {readingProgress}%</p>
            {badge && (
              <p className="badge flex items-center">
                {badgeIcon} {badge}
              </p>
            )}
          </div>
        </div>

        {/* Buttons for buying, reading, and downloading */}
        <div className="flex space-x-4 mt-5">
          {/* Buy Book Button */}
          <button className="bg-blue-500 text-white px-6 py-3 rounded-md flex items-center space-x-2 hover:bg-blue-600 transition duration-300">
            <FaShoppingCart /> <span>Buy Book</span>
          </button>

          {/* Read Book Button */}
          <button
            onClick={handleReadBook}
            className="bg-green-500 text-white px-6 py-3 rounded-md flex items-center space-x-2 hover:bg-green-600 transition duration-300"
          >
            <FaBookOpen /> <span>Read Book</span>
          </button>

          {/* Download Button */}
          <a
            href={bookPdfUrl}
            className="bg-orange-500 text-white px-6 py-3 rounded-md flex items-center space-x-2 hover:bg-orange-600 transition duration-300"
            download
          >
            <FaDownload /> <span>Download</span>
          </a>
        </div>
      </div>

      {/* Reading Mode */}
      {readingMode && (
        <div className="fixed inset-0 bg-white z-50 overflow-hidden">
          <BookReader
            bookPdfUrl={bookPdfUrl}
            onProgressUpdate={handleReadingProgress}
            onClose={() => setReadingMode(false)} // Close reading mode
          />
        </div>
      )}

      {/* Review Section */}
      <div className="mt-5">
        <h2 className="text-2xl font-semibold mb-2">Reviews</h2>
        <form onSubmit={handleReviewSubmit} className="flex flex-col mb-5">
          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            placeholder="Write your review..."
            className="border p-2 rounded-md mb-2"
            required
          />
          <select
            value={rating}
            onChange={(e) => setRating(parseInt(e.target.value))}
            className="border p-2 rounded-md mb-2"
            required
          >
            <option value="">Rate the book</option>
            <option value={1}>1 Star</option>
            <option value={2}>2 Stars</option>
            <option value={3}>3 Stars</option>
            <option value={4}>4 Stars</option>
            <option value={5}>5 Stars</option>
          </select>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Submit Review
          </button>
        </form>

        {/* Display reviews */}
        <div>
          {reviews.length > 0 ? (
            reviews.map((rev, index) => (
              <div key={index} className="mb-2 border-b pb-2">
                <p className="font-bold">Rating: {rev.rating} Stars</p>
                <p>{rev.review}</p>
              </div>
            ))
          ) : (
            <p>No reviews yet. Be the first to review.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleBook;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleBook = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await fetch(`http://localhost:5000/book/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch book data");
        }
        const data = await response.json();
        setBook(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching book:", err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchBook();
  }, [id]);

  if (loading) {
    return <div className="text-center mt-28">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-28 text-red-500">Error: {error}</div>;
  }

  if (!book) {
    return <div className="text-center mt-28">No book found</div>;
  }

  const {
    bookTitle,
    authorName,
    imageURL,
    bookDescription,
    category,
    bookPdfUrl,
  } = book;

  return (
    <div className="flex flex-col mt-28 lg:flex-row p-5 rounded-lg w-full h-full">
      <div className="lg:w-1/2 xl:w-1/3 p-4 lg:p-12">
        <img src={imageURL} alt={bookTitle} className="h-96 mb-4" />
      </div>
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
          dangerouslySetInnerHTML={{ __html: bookDescription }}
        />
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

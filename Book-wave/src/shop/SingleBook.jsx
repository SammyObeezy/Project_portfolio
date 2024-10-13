import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleBook = () => {
  const {
    _id,
    bookTitle,
    imageURL,
    bookDescription,
    bookPdfUrl,
    author,
    genre,
    publicationDate,
    rating,
  } = useLoaderData();

  return (
    <div className="flex flex-col mt-28 lg:flex-row p-5 rounded-lg w-full h-full">
      {/* Book Image */}
      <div className="lg:w-1/2 xl:w-1/3 p-4 lg:p-12">
        <img src={imageURL} alt={bookTitle} className="h-96 mb-4" />
      </div>

      {/* Book Details */}
      <div className="lg:w-1/2 xl:w-2/3 p-4 lg:p-12">
        <h1 className="text-2xl font-bold mb-3">{bookTitle}</h1>
        <p className="text-lg font-semibold text-gray-700 mb-2">
          Author: {author}
        </p>
        <p className="text-md font-semibold text-gray-600 mb-2">
          Genre: {genre}
        </p>
        <p className="text-md font-semibold text-gray-600 mb-2">
          Published: {publicationDate}
        </p>
        <p className="text-md font-semibold text-yellow-600 mb-5">
          Rating: {rating} / 5
        </p>

        {/* Book Description */}
        <div
          className="text-lg text-gray-600 mb-5"
          dangerouslySetInnerHTML={{ __html: bookDescription }}
        />

        {/* Download Button */}
        <a
          href={bookPdfUrl}
          className="bg-orange-500 text-white px-4 py-3 rounded-md text-base hover:bg-orange-600 w-max"
        >
          Download PDF
        </a>
      </div>
    </div>
  );
};

export default SingleBook;

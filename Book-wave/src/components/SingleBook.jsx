import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleBook = () => {
  const {
    _id,
    bookTitle,
    authorName,
    imageURL,
    bookDescription,
    category,
    bookPdfUrl,
    price,
  } = useLoaderData();

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
      </div>
    </div>
  );
};

export default SingleBook;

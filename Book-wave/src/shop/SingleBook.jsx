import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleBook = () => {
  const { _id, bookTitle, imageURL, bookDescription, bookPdfUrl } =
    useLoaderData();
  return (
    <div className="flex flex-col mt-28 lg:flex-row p-5 rounded-lg w-full h-full">
      <div className="lg:w-1/2 xl:w-1/3 p-4 lg:p-12">
        <img src={imageURL} alt="" className="h-96 mb-4" />
      </div>
      <div className="lg:w-1/2 xl:w-2/3 p-4 lg:p-12">
        <h1 className="text-2xl font-bold mb-3">{bookTitle}</h1>
        <div
          className="text-lg text-gray-600 mb-5"
          dangerouslySetInnerHTML={{ __html: bookDescription }}
        />
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

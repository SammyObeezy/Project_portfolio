import React from "react";

const BookCardRent = ({ book }) => {
  return (
    <div className="book-card shadow-md p-4 rounded-lg bg-white">
      <img
        src={book.imageURL}
        alt={book.title}
        className="h-40 w-full rounded"
      />
      <h3 className="text-lg font-semibold mt-2">{book.title}</h3>
      <p className="text-sm text-gray-500">Author: {book.author}</p>
      <p className="text-sm text-gray-500">Genre: {book.genre}</p>
      <p className="text-md font-semibold mt-2">${book.rentalPrice} / week</p>
      <button className="bg-orange-200 text-white px-4 py-2 rounded-md mt-4 hover:bg-orange-600 transition">
        Rent Now
      </button>
    </div>
  );
};

export default BookCardRent;

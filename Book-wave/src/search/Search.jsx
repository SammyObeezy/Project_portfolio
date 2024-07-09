import React from "react";

const Search = () => {
  return (
    <div>
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Search a book"
        className="py-2 px-2 rounded-s-sm outline-none"
      />
      <button
        className="bg-red-700 px-6 py-2 text-white font-medium hover:bg-black
          transition-all ease-in duration-200"
      >
        Search
      </button>
    </div>
  );
};

export default Search;

import React, { useState, useEffect } from "react";
import BannerCard from "../Home/BannerCard";
import yourImage from "../assets/sub-pic11.png";

const Banner = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [message, setMessage] = useState("");

  // Fetch all books initially
  const fetchBooks = async () => {
    try {
      const response = await fetch("http://localhost:5000/all-books");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setBooks(data); // Save all books in state
    } catch (error) {
      console.error("Error fetching books:", error.message);
    }
  };

  // Effect to fetch books when component mounts
  useEffect(() => {
    fetchBooks();
  }, []);

  // Handle search
  const handleSearch = () => {
    const filteredBooks = books.filter((book) => {
      return book.title && book.title.toLowerCase().includes(searchTerm.toLowerCase());
    });

    if (filteredBooks.length > 0) {
      setSearchResults(filteredBooks);
      setMessage(""); // Clear message if books are found
    } else {
      setSearchResults([]);
      setMessage("No books found.");
    }
  };

  return (
    <div
      className="relative px-4 lg:px-24 flex items-center justify-center"
      style={{
        background:
          "linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(200, 200, 200, 0.8))",
      }}
    >
      {/* Background Image on large screens */}
      <div className="hidden lg:block absolute left-0 top-10 z-0">
        <img
          src={yourImage}
          alt="Reading Character"
          className="h-auto w-5/3 lg:w-3/5"
        />
      </div>

      <div className="relative flex w-full max-w-5xl flex-col md:flex-row justify-between items-center gap-12 z-10 py-20 lg:py-40">
        {/* Left side */}
        <div className="md:w-1/2 space-y-8 h-full">
          <h2 className="text-4xl md:text-6xl font-bold leading-snug text-black">
            Discover, Purchase, & <br /> Enjoy eBooks Easily
          </h2>
          <p className="md:w-4/5 text-black">
            Explore a world of knowledge and entertainment with just a few
            clicks!
          </p>
          <div className="flex">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search a book"
              className="py-2 px-4 rounded-l-md outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} // Update search term state
            />
            <button
              className="bg-red-600 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200 rounded-r-md border border-red-600 hover:border-black"
              onClick={handleSearch} // Trigger search on button click
            >
              Search
            </button>
          </div>

          {/* Display search results or message */}
          {message && <p className="mt-4 text-red-500">{message}</p>}
          <div className="mt-4">
            {searchResults.map((book) => (
              <div key={book.id} className="p-2 border-b">
                <h3 className="text-lg font-semibold">{book.title}</h3>
                <p className="text-gray-600">{book.author}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right side */}
        <div>
          <BannerCard />
        </div>
      </div>
    </div>
  );
};

export default Banner;

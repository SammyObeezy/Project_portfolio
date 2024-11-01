import React, { useEffect, useState } from "react";

const Rent = () => {
  const [rentalBooks, setRentalBooks] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedGenre, setSelectedGenre] = useState("all");
  const [sortBy, setSortBy] = useState("newest");

  const genres = [
    "all",
    "Fiction",
    "Non-Fiction",
    "Science",
    "Technology",
    "History",
    "Romance",
    "Mystery",
    "Fantasy",
  ];

  useEffect(() => {
    const fetchRentalBooks = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:5000/available-rentals");
        if (!response.ok) throw new Error("Failed to fetch books");
        const data = await response.json();
        setRentalBooks(data);
      } catch (error) {
        setError(error.message);
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRentalBooks();
  }, []);

  const filteredBooks = rentalBooks
    .filter((book) => selectedGenre === "all" || book.genre === selectedGenre)
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.rentalPrice - b.rentalPrice;
        case "price-high":
          return b.rentalPrice - a.rentalPrice;
        case "newest":
          return new Date(b.availableFrom) - new Date(a.availableFrom);
        default:
          return 0;
      }
    });

  const BookCard = ({ book }) => {
    const [imageError, setImageError] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div
        className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden relative h-[420px]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Badge for book condition */}
        <div className="absolute top-2 right-2 z-10">
          <span className="px-2 py-1 bg-blue-500 text-white text-xs rounded-full font-medium">
            {book.condition || "Unavailable"}
          </span>
        </div>

        {/* Book Image or Placeholder */}
        <div className="relative h-[260px] bg-gray-100">
          {imageError ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-gray-50">
              <span className="text-4xl mb-2">📚</span>
              <p className="text-sm text-gray-600 text-center font-medium line-clamp-3">
                {book.rentalTitle || "Untitled Book"}
              </p>
            </div>
          ) : (
            <img
              src={book.imageURL}
              alt={book.rentalTitle}
              onError={(e) => {
                setImageError(true);
              }}
              className="w-full h-full object-cover"
            />
          )}
          <div
            className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent
              ${isHovered ? "opacity-100" : "opacity-0"}
              transition-opacity duration-300`}
          />
        </div>

        {/* Book Details */}
        <div className="p-4 space-y-2">
          {/* Rating and Price Row */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <span className="text-yellow-400">⭐</span>
              <span className="text-sm text-gray-600">
                {book.rating || "Unavailable"}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-gray-400">💰</span>
              <span className="text-sm font-semibold text-gray-900">
                ${book.rentalPrice || "Unavailable"}
                <span className="text-xs font-normal text-gray-600">/day</span>
              </span>
            </div>
          </div>

          {/* Info Grid */}
          <div className="grid grid-cols-2 gap-2 py-2">
            <div className="flex items-center gap-1.5">
              <span className="text-gray-400">👤</span>
              <span className="text-xs text-gray-600 truncate">
                {book.renterName || "Unavailable"}
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              <span className="text-gray-400">📍</span>
              <span className="text-xs text-gray-600 truncate">
                {book.location || "Unavailable"}
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              <span className="text-gray-400">📚</span>
              <span className="text-xs text-gray-600 truncate">
                {book.genre || "Unavailable"}
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              <span className="text-gray-400">⏰</span>
              <span className="text-xs text-gray-600 truncate">
                {book.condition || "Unavailable"}
              </span>
            </div>
          </div>

          {/* Dates */}
          <div className="flex items-center gap-1.5 pt-1">
            <span className="text-gray-400">📅</span>
            <span className="text-xs text-gray-600 truncate">
              {book.availableFrom && book.availableTo
                ? `${new Date(
                    book.availableFrom
                  ).toLocaleDateString()} - ${new Date(
                    book.availableTo
                  ).toLocaleDateString()}`
                : "Dates Unavailable"}
            </span>
          </div>

          {/* Borrow Button */}
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors duration-200 mt-2">
            Borrow Now
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-[1600px] mx-auto px-4 py-8 bg-gray-50 min-h-screen mt-12">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Book Rental Haven
        </h1>
        <p className="text-gray-600 text-sm">Find Your Next Read</p>
      </div>

      {/* Filters and Sort */}
      <div className="mb-6 flex flex-col sm:flex-row gap-4 justify-between items-center">
        {/* Genre Filter */}
        <div className="flex gap-2 overflow-x-auto pb-2 w-full sm:w-auto">
          {genres.map((genre) => (
            <button
              key={genre}
              onClick={() => setSelectedGenre(genre)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap
                ${
                  selectedGenre === genre
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-600 hover:bg-gray-100"
                } transition-colors duration-200`}
            >
              {genre.charAt(0).toUpperCase() + genre.slice(1)}
            </button>
          ))}
        </div>

        {/* Sort Options */}
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-3 py-1.5 rounded-lg text-sm border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="newest">Newest First</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
        </select>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="text-center py-10">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading available books...</p>
        </div>
      )}

      {/* Error Display */}
      {error && (
        <div className="bg-red-50 text-red-700 p-4 rounded-lg mb-6 text-sm text-center">
          {error}
        </div>
      )}

      {/* Empty State */}
      {!loading && filteredBooks.length === 0 && (
        <div className="text-center py-10">
          <span className="text-4xl text-gray-400">📚</span>
          <p className="text-gray-500 mt-4">
            No books available for the selected criteria
          </p>
        </div>
      )}

      {/* Book Grid */}
      {!loading && filteredBooks.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {filteredBooks.map((book) => (
            <BookCard key={book._id} book={book} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Rent;

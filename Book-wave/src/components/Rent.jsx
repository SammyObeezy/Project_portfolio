import React, { useEffect, useState } from "react";

const Rent = () => {
  const [rentalBooks, setRentalBooks] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedGenre, setSelectedGenre] = useState("all");
  const [sortBy, setSortBy] = useState("newest");
  const [currency, setCurrency] = useState("USD");
  const [currencySymbol, setCurrencySymbol] = useState("Ksh");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCounty, setSelectedCounty] = useState("all");
  const [selectedSubCounty, setSelectedSubCounty] = useState("all");
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
  const [isProcessing, setIsProcessing] = useState({});

  //add data here for all locations or we can optionally add a functionalty to make fetching possible automatically
  const counties = ["all", "Nairobi", "Mombasa", "Kisumu", "Nakuru"];
  const subCounties = {
    all: ["all"],
    Nairobi: ["all", "Westlands", "Kasarani", "Embakasi", "Dagoretti"],
    Mombasa: ["all", "Nyali", "Kisauni", "Likoni"],
    Kisumu: ["all", "Kisumu Central", "Kisumu West", "Kisumu East"],
    Nakuru: ["all", "Nakuru Town West", "Nakuru Town East", "Naivasha"],
  };

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

  const conditions = ["all", "New", "Like New", "Good", "Fair"];

  const handleBorrow = async (bookId) => {
    setIsProcessing(prev => ({ ...prev, [bookId]: true }));
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsProcessing(prev => ({ ...prev, [bookId]: false }));
  };

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
    .filter((book) => {
      const matchesSearch =
        (book.rentalTitle?.toLowerCase() || "").includes(
          searchQuery.toLowerCase()
        ) ||
        (book.renterName?.toLowerCase() || "").includes(
          searchQuery.toLowerCase()
        ) ||
        (book.location?.toLowerCase() || "").includes(
          searchQuery.toLowerCase()
        ) ||
        (book.genre?.toLowerCase() || "").includes(searchQuery.toLowerCase());

      const matchesGenre = selectedGenre === "all" || book.genre === selectedGenre;
      const matchesCounty = selectedCounty === "all" || book.county === selectedCounty;
      const matchesSubCounty = selectedSubCounty === "all" || book.subCounty === selectedSubCounty;
      
      
      return matchesSearch && matchesGenre && matchesCounty && matchesSubCounty
    })
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

    const formatDate = (dateString) => {
      return new Date(dateString).toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    };

    return (
      <div
        className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden relative h-[550px] border border-gray-100 grid grid-cols-0"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="absolute top-3 right-3 z-10">
          <span className="px-3 py-1.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs rounded-full font-medium shadow-sm">
            {book.condition || "Unavailable"}
          </span>
        </div>

        <div className="relative h-[240px] bg-gradient-to-br from-gray-50 to-gray-100">
          {imageError ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
              <div className="w-33 h-20 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl flex items-center justify-center">
                <span className="text-3xl">📚</span>
                <h2>BOOKWAVE</h2>
              </div>
              <p className="mt-3 text-sm text-gray-600 text-center font-medium line-clamp-2">
                {book.rentalTitle || "Untitled Book"}
              </p>
            </div>
          ) : (
            <img
              src={book.imageURL}
              alt={book.rentalTitle}
              onError={() => setImageError(true)}
              className="w-full h-full object-cover"
            />
          )}
        </div>

        <div className="p-5 space-y-4">
          <h3 className="font-semibold text-gray-900 line-clamp-2 min-h-[48px]">
            {book.rentalTitle}
          </h3>

          <div className="space-y-3">
            <div className="flex items-center justify-between bg-gray-50 p-2 rounded-lg">
              <span className="text-gray-600 text-sm">Daily Rate</span>
              <span className="font-semibold text-gray-900">
                {currencySymbol}
                {book.rentalPrice}
                <span className="text-xs text-gray-500 ml-1">/day</span>
              </span>
            </div>

            <div className="flex items-center gap-2 text-sm">
              <svg
                className="w-4 h-4 text-orange-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <span className="text-gray-600 truncate">{book.renterName}</span>
            </div>

            <div className="flex items-center gap-2 text-sm">
              <svg
                className="w-4 h-4 text-orange-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
              </svg>
              <span className="text-gray-600 truncate">{book.location}</span>
            </div>

            <div className="flex items-center gap-2 text-sm">
              <svg
                className="w-4 h-4 text-orange-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="text-gray-600 text-xs">
                {formatDate(book.availableFrom)} -{" "}
                {formatDate(book.availableTo)}
              </span>
            </div>
          </div>

          <button
            onClick={() => handleBorrow(book._id)}
            disabled={isProcessing[book._id]}
            className="w-full bg-black hover:bg-gray-800 text-white font-medium py-2.5 px-4 rounded-xl transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 shadow-sm hover:shadow-md flex items-center justify-center"
          >
            {isProcessing[book._id] ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Processing...
              </>
            ) : (
              "Borrow Now"
            )}
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-[1600px] mx-auto px-6 py-12 bg-gradient-to-b from-gray-50 to-white min-h-screen mt-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-3">
          Reading made simple, affordable, and tailored to you
        </h1>
        <p className="text-gray-600">Discover and Borrow Amazing Books</p>
      </div>

      {/* Search Bar */}
      <div className="mb-8">
        <div className="relative max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="Search by title, genre, location or owner..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 pl-12 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <svg
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      {/* Advanced Filters */}
      <div className="mb-8 bg-white p-6 rounded-xl shadow-sm space-y-6 flex">
        <div className="grid grid-cols-4 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {/* Location Filters */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">County</label>
            <select
              value={selectedCounty}
              onChange={(e) => {
                setSelectedCounty(e.target.value);
                setSelectedSubCounty("all");
              }}
              className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              {counties.map((county) => (
                <option key={county} value={county}>
                  {county}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Sub-County
            </label>
            <select
              value={selectedSubCounty}
              onChange={(e) => setSelectedSubCounty(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              {subCounties[selectedCounty].map((subCounty) => (
                <option key={subCounty} value={subCounty}>
                  {subCounty}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Sort Options */}
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-4 py-2 rounded-lg text-sm border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 cursor-pointer"
        >
          <option value="newest">Newest First</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
        </select>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="text-center py-16">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-gray-200 border-t-orange-600"></div>
          <p className="mt-4 text-gray-600 font-medium">
            Finding available books...
          </p>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="bg-red-50 border border-red-100 text-red-700 p-6 rounded-xl mb-8 text-center">
          <p className="font-medium">{error}</p>
          <p className="text-sm mt-2 text-red-600">Please try again later</p>
        </div>
      )}

      {/* Empty State */}
      {!loading && filteredBooks.length === 0 && (
        <div className="text-center py-16 bg-white rounded-xl shadow-sm">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">📚</span>
          </div>
          <p className="text-gray-600 font-medium">No books available</p>
          <p className="text-gray-500 text-sm mt-2">
            Try adjusting your filters
          </p>
        </div>
      )}

      {/* Book Grid */}
      {!loading && filteredBooks.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredBooks.map((book) => (
            <BookCard key={book._id} book={book} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Rent;

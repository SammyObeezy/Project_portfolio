import React, { useEffect, useState } from "react";
import BookCards from "../components/BookCards";

const FavoriteBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then((res) => res.json())
      .then((data) => setBooks(data.slice(0, 8)));
  }, []);
  return (
    <div>
      <BookCards books={books} headline="Featured Books" />
    </div>
  );
};

export default FavoriteBooks;

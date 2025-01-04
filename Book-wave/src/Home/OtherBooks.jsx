import React, { useEffect, useState } from "react";
import BookCards from "../components/BookCards";
import { backendUrl } from "../App";

const OtherBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch(backendUrl + "/all-books")
      .then((res) => res.json())
      .then((data) => setBooks(data.slice(0, 8)));
  }, []);
  return (
    <div>
      <BookCards books={books} headline="Other Books To Explore" />
    </div>
  );
};

export default OtherBooks;

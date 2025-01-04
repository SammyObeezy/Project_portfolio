import React, { useEffect, useState } from "react";
import BookCards from "../components/BookCards";
import { backendUrl } from "../App";

const BestSelling = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
      fetch(backendUrl + "all-books")
        .then((res) => res.json())
        .then((data) => setBooks(data.slice(0, 8)));
    }, []);
    return (
      <div>
        <BookCards books={books} headline="Best Selling Books" />
      </div>
    );
}

export default BestSelling;
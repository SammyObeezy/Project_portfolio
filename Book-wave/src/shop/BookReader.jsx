import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./BookReader.css"; // CSS file for styling

const BookReader = ({ bookPdfUrl, onProgressUpdate, onClose }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  // Fetch total pages from the PDF
  useEffect(() => {
    setTotalPages(100); // This should be replaced with actual logic to fetch total pages from the PDF

    // Update reading progress
    onProgressUpdate(0);
  }, [onProgressUpdate]);

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prevPage) => prevPage + 1);
      onProgressUpdate(((currentPage + 1) / totalPages) * 100);
    }
  };

  const previousPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prevPage) => prevPage - 1);
      onProgressUpdate(((currentPage - 1) / totalPages) * 100);
    }
  };

  return (
    <div className="book-reader">
      <div className="page-container">
        <motion.div
          className="page"
          key={currentPage}
          initial={{ opacity: 0, rotateY: 180 }}
          animate={{ opacity: 1, rotateY: 0 }}
          exit={{ opacity: 0, rotateY: 180 }}
          transition={{ duration: 0.6 }}
        >
          {/* Render PDF page content here */}
          <iframe
            src={`${bookPdfUrl}#page=${currentPage + 1}`}
            title="Book PDF"
            width="100%"
            height="100%"
          ></iframe>
        </motion.div>
      </div>

      <div className="navigation">
        <button onClick={previousPage} disabled={currentPage === 0}>
          Previous
        </button>
        <span>
          Page {currentPage + 1} of {totalPages}
        </span>
        <button onClick={nextPage} disabled={currentPage >= totalPages - 1}>
          Next
        </button>
      </div>
      <button className="close-button" onClick={onClose}>
        &times; {/* This is the X icon for closing */}
      </button>
    </div>
  );
};

export default BookReader;

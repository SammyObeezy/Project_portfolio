import React from "react";
import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa"; // Importing an icon

const NotFound = () => {
  // Inline styles
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh", // Full viewport height
    backgroundColor: "#f9f9f9", // Light background color
    textAlign: "center",
  };

  const contentStyle = {
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#ffffff", // White background for the content
  };

  const iconStyle = {
    fontSize: "50px", // Icon size
    color: "#ff0000", // Red color for the icon
    marginBottom: "20px",
  };

  const h1Style = {
    fontSize: "100px", // Large font size for 404
    color: "#ff0000", // Red color for the 404 text
    margin: "0",
  };

  const h2Style = {
    fontSize: "24px", // Medium font size for the subtitle
    color: "#333", // Darker text for contrast
  };

  const pStyle = {
    fontSize: "16px", // Normal font size for the paragraph
    color: "#666", // Gray color for the text
    marginBottom: "20px",
  };

  const linkStyle = {
    display: "inline-block",
    padding: "12px 20px", // Button padding
    fontSize: "16px", // Button font size
    color: "white", // White text color
    backgroundColor: "#ff0000", // Red fill
    border: "none",
    borderRadius: "5px", // Rounded corners
    textDecoration: "none", // Remove underline from the link
    transition: "background-color 0.3s", // Smooth transition
  };

  const linkHoverStyle = {
    backgroundColor: "#d40000", // Darker red on hover
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <FaExclamationTriangle style={iconStyle} />
        <h1 style={h1Style}>404</h1>
        <h2 style={h2Style}>Page Not Found</h2>
        <p style={pStyle}>Oops! The page you are looking for does not exist.</p>
        <Link
          to="/"
          style={linkStyle}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor =
              linkHoverStyle.backgroundColor)
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = linkStyle.backgroundColor)
          }
        >
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

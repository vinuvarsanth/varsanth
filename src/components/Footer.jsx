import React from "react";

const Footer = () => {
  const footerStyles = {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#333",
    color: "#fff",
    padding: "10px",
    textAlign: "center",
  };

  return (
    <div style={footerStyles}>
      <p>
        &copy; 2023 Your Company. All rights reserved. Contact:
        contact@yourcompany.com
      </p>
    </div>
  );
};

export default Footer;

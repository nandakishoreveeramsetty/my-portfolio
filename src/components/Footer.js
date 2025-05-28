// src/components/Footer.js
import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Nanda Kishore Veeramsetty</p>
      <p>
       Built rapidly with ❤️ using React and AI (ChatGPT) |{" "}
        <a
          href="https://github.com/nandakishoreveeramsetty/my-portfolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </p>
    </footer>
  );
};

export default Footer;

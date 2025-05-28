import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1 className="name">Nanda Kishore Veeramsetty</h1>
      <h3 className="title">CHATBOTS / CCAI / GCP - GEN AI DEVELOPER</h3>

      <p className="contact">
        📍 Bangalore | 📞 +91 9618821719 | 📧{" "}
        <a href="mailto:nandakishore3393@gmail.com" className="link">
          nandakishore3393@gmail.com
        </a>
      </p>

      <p>
        🔗{" "}
        <a
          href="https://www.linkedin.com/in/nandakishore3/"
          target="_blank"
          rel="noreferrer"
          className="link"
        >
          LinkedIn Profile
        </a>
      </p>
    </header>
  );
};

export default Header;

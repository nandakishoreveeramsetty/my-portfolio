import React, { useState, useEffect } from "react";
import "../styles/AwardsRecognitions.css";

const AwardsRecognitions = () => {
  const [modalImage, setModalImage] = useState(null);

  // Disable body scroll when modal is open
  useEffect(() => {
    if (modalImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modalImage]);

  const openModal = (src) => setModalImage(src);
  const closeModal = () => setModalImage(null);

  return (
    <div className="awards-container">
      <h2>Awards & Recognitions</h2>
      <div className="award-gallery">
        {[1, 2, 3, 4].map((num) => (
          <div
            className="award-img-wrapper"
            key={num}
            onClick={() => openModal(`${process.env.PUBLIC_URL}/Awards/Award${num}.png`)}
          >
            <img
              src={`${process.env.PUBLIC_URL}/Awards/Award${num}.png`}
              alt={`Award ${num}`}
              className="award-img"
            />
            <div className="click-hint">Click to enlarge</div>
          </div>
        ))}
      </div>

      <ul>
        <li>🏆 Received 4 awards for innovation, technical excellence, and impactful contributions.</li>
        <li>🎖️ Recognized for high-impact PoCs using Generative AI on GCP.</li>
        <li>🌟 Honored for mentorship and delivering quality in high-pressure settings.</li>
      </ul>

      {modalImage && (
        <div className="modal" onClick={closeModal}>
          <span className="close">&times;</span>
          <img className="modal-content" src={modalImage} alt="Award Full" />
        </div>
      )}
    </div>
  );
};

export default AwardsRecognitions;

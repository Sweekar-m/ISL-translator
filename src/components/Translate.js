import React, { useState, useRef } from 'react';

const Translate = () => {
  const [alphabet, setAlphabet] = useState('');
  const [videoSrcs, setVideoSrcs] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Remove spaces from input
    const cleanedText = alphabet.replace(/\s+/g, '');
    
    if (!/^[a-zA-Z]+$/.test(cleanedText)) {
      alert('Please enter only letters (A-Z or a-z). Numbers and special characters are not allowed.');
      return;
    }

    const letters = cleanedText.toLowerCase().split('');
    const videos = letters.map((letter) => `${process.env.PUBLIC_URL}/asset/${letter.toUpperCase()}.mp4`);
    
    setVideoSrcs(videos);
    setCurrentIndex(0);
  };

  const handleReset = () => {
    setAlphabet('');
    setVideoSrcs([]);
    setCurrentIndex(0);
  };

  const handleVideoEnd = () => {
    if (currentIndex < videoSrcs.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div style={styles.translate}>
      <div style={styles.card}>
        <h2 style={styles.title}>📖 Sign Language Translator</h2>

        {/* Video Section */}
        {videoSrcs.length > 0 && (
          <div style={styles.videoContainer}>
            <video
              key={currentIndex}
              ref={videoRef}
              width="100%"
              height="315"
              autoPlay
              controls
              onEnded={handleVideoEnd}
            >
              <source src={videoSrcs[currentIndex]} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}

        {/* Input & Submit Form */}
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            placeholder="Enter text (A-Z only)"
            value={alphabet}
            onChange={(e) => setAlphabet(e.target.value)}
            style={styles.input}
            maxLength="40"
          />
          <button type="submit" style={styles.button}>Translate</button>
        </form>

        {/* Reset Button */}
        <button
          onClick={handleReset}
          style={{ ...styles.button, backgroundColor: '#FF5733', marginTop: '20px' }}
        >
          🔄 Clear & Explore Again
        </button>
      </div>
    </div>
  );
};

const styles = {
  translate: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    background: 'linear-gradient(to right, #757F9A, #D7DDE8)',
    color: '#333',
    padding: '20px',
  },
  card: {
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    padding: '40px',
    borderRadius: '20px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
    maxWidth: '600px',
    width: '90%',
  },
  title: {
    fontSize: '28px',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  input: {
    padding: '15px',
    fontSize: '18px',
    border: 'none',
    borderRadius: '10px',
    textAlign: 'center',
    outline: 'none',
    backgroundColor: '#fff',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  },
  button: {
    padding: '15px 25px',
    fontSize: '18px',
    fontWeight: 'bold',
    backgroundColor: '#444',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: '0.3s',
  },
  videoContainer: {
    marginTop: '20px',
    borderRadius: '15px',
    overflow: 'hidden',
    boxShadow: '0 6px 15px rgba(0, 0, 0, 0.2)',
  },
};

export default Translate;

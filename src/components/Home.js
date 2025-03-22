import React from 'react';

const Home = () => {
  return (
    <div style={styles.home}>
      {/* Header Section */}
      <h1 style={styles.mainTitle}>Welcome to Indian Sign Language</h1>

      {/* Content Boxes Section */}
      <div style={styles.contentContainer}>
        {/* Box 1: About Indian Sign Language */}
        <div style={styles.box}>
          <h2 style={styles.boxTitle}>What is Indian Sign Language?</h2>
          <p style={styles.boxText}>
            Indian Sign Language (ISL) is a visual language used by the Deaf community in India. It is a complete language with its own grammar and syntax, distinct from spoken languages. ISL is used to communicate through hand gestures, facial expressions, and body movements.
          </p>
        </div>

        {/* Box 2: Importance of ISL */}
        <div style={styles.box}>
          <h2 style={styles.boxTitle}>Why is ISL Important?</h2>
          <p style={styles.boxText}>
            ISL plays a crucial role in bridging the communication gap between the Deaf and hearing communities. It empowers Deaf individuals to express themselves, access education, and participate fully in society. Learning ISL promotes inclusivity and understanding.
          </p>
        </div>

        {/* Box 3: How to Learn ISL */}
        <div style={styles.box}>
          <h2 style={styles.boxTitle}>How to Learn ISL?</h2>
          <p style={styles.boxText}>
            You can start learning ISL by watching tutorials, attending workshops, or using online resources. Practice regularly with Deaf individuals or join ISL communities to improve your skills. Remember, consistency is key!
          </p>
        </div>
      </div>

      {/* Robot Illustration and YouTube Video Section */}
      <div style={styles.sideSection}>
        <div style={styles.robotContainer}>
          
          <p style={styles.robotText}>🤖 Learn ISL with me!</p>
        </div>
        <div style={styles.videoSection}>
          <p style={styles.videoText}>Refer this video to know more about Indian Sign Language:</p>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/qcdivQfA41Y?si=rAoFjNjAxvEzqhwS"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={styles.video}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

// Styles
const styles = {
  home: {
    padding: '20px',
    marginTop: '100px',
    backgroundColor: '#f9f9f9',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif',
  },
  mainTitle: {
    textAlign: 'center',
    color: '#4CAF50',
    fontSize: '2.5rem',
    marginBottom: '20px',
  },
  contentContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center',
    marginBottom: '40px',
  },
  box: {
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '30%',
    minWidth: '300px',
    transition: 'transform 0.3s ease',
  },
  boxTitle: {
    color: '#333',
    fontSize: '1.5rem',
    marginBottom: '10px',
  },
  boxText: {
    color: '#555',
    fontSize: '1rem',
    lineHeight: '1.6',
  },
  sideSection: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#4CAF50',
    borderRadius: '10px',
    margin: '0 auto',
    maxWidth: '1200px',
  },
  robotContainer: {
    textAlign: 'center',
  },
  robotImage: {
    width: '150px',
    height: 'auto',
  },
  robotText: {
    color: '#fff',
    fontSize: '1.2rem',
    marginTop: '10px',
  },
  videoSection: {
    flex: 1,
    marginLeft: '20px',
  },
  videoText: {
    color: '#fff',
    fontSize: '1.2rem',
    marginBottom: '10px',
  },
  video: {
    borderRadius: '10px',
  },
};

export default Home;
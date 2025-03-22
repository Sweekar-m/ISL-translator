import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={styles.header}>
      {/* Logo & Title Section */}
      <div style={styles.logoContainer}>
      <img src="asset/logo.jpeg" alt="Logo" style={styles.logo} />
        <h1 style={styles.title}>Indian Sign Language</h1>
      </div>

      {/* Navigation Links - Adjusted Alignment */}
      <nav style={styles.nav}>
        <Link to="/" style={styles.navButton}>🏠 Home</Link>
        <Link to="/translate" style={styles.navButton}>📖 Translate</Link>
      </nav>
    </header>
  );
};

// Styles
const styles = {
  header: {
    width: '100%',
    height: '110px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 20px', // Adjusted padding for better alignment
    background: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
    position: 'fixed',
    top: '0',
    left: '0',
    zIndex: '1000',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  logo: {
    height: '75px',
    width: '85px',
    borderRadius: '50%',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
  },
  title: {
    fontSize: '26px',
    fontWeight: 'bold',
    color: '#333',
    letterSpacing: '1px',
  },
  nav: {
    display: 'flex',
    gap: '20px', // More spacing between buttons
    marginRight: '100px', // Slightly moved to the left for better alignment
  },
  navButton: {
    padding: '12px 25px',
    backgroundColor: '#444',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: 'bold',
    transition: '0.3s ease-in-out',
  },
};

export default Header;

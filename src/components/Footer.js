import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer style={styles.footer}>
      <div style={styles.leftSection}>
        <button style={styles.button} onClick={() => navigate('/contact')}>Contact Us</button>
      </div>
      <div style={styles.centerSection}>
        <p>© 2025 Indian Sign Language Project. All Rights Reserved.</p>
      </div>
      <div style={styles.rightSection}>
        <p>Developed by: Vaishali and Sweekar</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    padding: '20px',
    backgroundColor: '#333',
    color: 'white',
    textAlign: 'center',
    marginTop: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  leftSection: {
    flex: 1,
    textAlign: 'left',
  },
  centerSection: {
    flex: 2,
    textAlign: 'center',
  },
  rightSection: {
    flex: 1,
    textAlign: 'right',
  },
  button: {
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem',
  },
};

export default Footer;

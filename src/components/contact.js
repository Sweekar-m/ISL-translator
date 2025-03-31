import React from 'react';

const ContactUs = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Contact Us</h1>
      
      <div style={styles.contactContainer}>
        {/* Contact Person 1 */}
        <div style={styles.card}>
          <h2 style={styles.name}>Sweekar M</h2>
          <p style={styles.role}>Developer</p>
          <p style={styles.college}>🎓 SDM Ujire</p>
          <p style={styles.class}>📚 BCA - Final Year</p>
          <p style={styles.email}>📧 sweekarm24@gmail.com</p>
          <p style={styles.phone}>📞 +91 87924 22478</p>
        </div>
        
        {/* Contact Person 2 */}
        <div style={styles.card}>
          <h2 style={styles.name}>Vaishali</h2>
          <p style={styles.role}>Developer</p>
          <p style={styles.college}>🎓 SDM Ujire</p>
          <p style={styles.class}>📚 BCA - Final Year</p>
          <p style={styles.email}>📧 Vaishali@gmail.com</p>
          <p style={styles.phone}>📞 +91 90085 36634</p>
        </div>
      </div>
    </div>
  );
};

// Styles
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f9f9f9',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
  },
  title: {
    color: '#4CAF50',
    fontSize: '2.5rem',
    marginBottom: '20px',
  },
  contactContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '300px',
    textAlign: 'center',
  },
  name: {
    color: '#333',
    fontSize: '1.5rem',
    marginBottom: '10px',
  },
  role: {
    color: '#777',
    fontSize: '1.2rem',
    marginBottom: '10px',
  },
  college: {
    color: '#444',
    fontSize: '1rem',
    fontWeight: 'bold',
    marginBottom: '5px',
  },
  class: {
    color: '#666',
    fontSize: '1rem',
    marginBottom: '10px',
  },
  email: {
    color: '#555',
    fontSize: '1rem',
    marginBottom: '5px',
  },
  phone: {
    color: '#555',
    fontSize: '1rem',
  },
};

export default ContactUs;

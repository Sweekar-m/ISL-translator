import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Translate from './components/Translate';

function App() {
  return (
    <Router>
      <div style={styles.app}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/translate" element={<Translate />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

const styles = {
  app: {
    fontFamily: 'Arial, sans-serif',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
};

export default App;

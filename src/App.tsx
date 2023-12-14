import React from 'react';
import { Home } from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Browser } from './components/Browser';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browser" element={<Browser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

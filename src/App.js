import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; // 'BrowserRouter' yerine 'HashRouter' kullanıyoruz
// Sayfalarınızı import edin
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import InputPage from './components/InputPage'; 
import TahminSonuc from './components/TahminSonuc';
import LLMRaporu from './components/LLMRaporu';

import './App.css'; // Genel stil dosyanız

function App() {
  return (
    // Router'ı HashRouter ile değiştiriyoruz
    <Router>
      <div className="App">
        {/* Routes, farklı yollar (path) arasında geçiş yapmamızı sağlar */}
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/input" element={<InputPage />} />
          <Route path="/sonuc" element={<TahminSonuc />} />
          <Route path="/llmrapor" element={<LLMRaporu />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

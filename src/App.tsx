import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ZayaChat from './components/ZayaChat';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import BeforeAfterPage from './pages/BeforeAfter';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'services':
        return <Services />;
      case 'before-after':
        return <BeforeAfterPage />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-champagne">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="animate-fade-in">
        {renderPage()}
      </main>
      <Footer />
      <ZayaChat />
    </div>
  );
}

export default App;
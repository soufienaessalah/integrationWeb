import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer";
import './index.css';
import Header from './components/Header/Header';
import { MarketplaceActions } from './components/Marketplace';
import { GameListing } from './components/GameListing';

function App() {
  return (

    <Router>
      <div className="min-h-screen bg-[#1a4b5c] text-white">
        <Header/>
        <Routes>
          {/* Page d'accueil */}
          <Route path="/" element={<h1></h1>} />
          <Route path="/Marketplace" element={<MarketplaceActions />} />
          <Route path="/GameListing" element={<GameListing />} />
         </Routes>

        {/* Footer toujours affiché */}
        <Footer />
      </div>
    </Router>

  );
}

export default App;

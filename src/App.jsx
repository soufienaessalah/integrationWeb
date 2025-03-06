import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer";
import './index.css';
import Header from './components/Header/Header';
import GameBoyArticlePage from './components/Blog/GameBoyArticlePage';
import GameBoyBlogList from './components/Blog/GameBoyBlogList';

function App() {
  const blogs = [
    { id: 1, title: "GameBoy History", author: "Youssef Ben Arous" },
    { id: 2, title: "Top GameBoy Games", author: "Maria Johnson" },
    { id: 3, title: "GameBoy Design Evolution", author: "Alex Smith" },
    { id: 4, title: "GameBoy vs. NES", author: "Sophie Lee" },
    { id: 5, title: "The Rise of Pokemon", author: "Ash Ketchum" },
    { id: 6, title: "GameBoy Camera Revolution", author: "Snap Master" },
  ];

  return (
    <Router>
      <div>
        <Header />  {/* Moved the Header inside the main container */}
        <Routes>
          <Route path="/"  />
          <Route path="/blog" element={<GameBoyBlogList />} />
          <Route path="/blog/:id" element={<GameBoyArticlePage blogs={blogs} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

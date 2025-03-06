import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer";
import Header from './components/Header';
import EventsPage from './components/EventsPage/EventsPage';
import EventDetail from './components/EventsDetails/EventDetail';
import './index.css';

function App() {
  return (
    <Router>
      <div style={{ width: '1433px', height: '2511px' }}>
        <Header />
        <Routes>
          <Route path="/event" element={<EventsPage />} />
          <Route path="/event-detail" element={<EventDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

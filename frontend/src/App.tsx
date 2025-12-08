import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MasterLayout from './layouts/MasterLayout';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import Contact from './pages/Contact';
import JoinUs from './pages/JoinUs';
import Showcase from './pages/Showcase';
import Batch2026 from './pages/batch/batch_2026';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MasterLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="events" element={<Events />} />
          <Route path="contact" element={<Contact />} />
          <Route path="join-us" element={<JoinUs />} />
          <Route path="showcase" element={<Showcase />} />
          <Route path="batch/2026" element={<Batch2026 />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
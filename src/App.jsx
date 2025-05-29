
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Frame from './Container/Frame'; // Ensure this import matches your file structure
import { Accordion } from '@mui/material';
import Accordion5 from './Container/Shared/Accordion5';
import Bounce from './Tests/Bounce';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/frame" element={<Frame />} />
                <Route path="/accordion" element={<Accordion5 />} />
                <Route path="/bounce" element={<Bounce />} />
                
            </Routes>
        </Router>
    );
}

export default App;

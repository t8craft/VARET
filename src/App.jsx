
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SolarContainer from './solar/Container';
import SelectedItems from './solar/SelectedItems';
import NewCard from './solar/NewCard';
import Casing from './Structure/Casing';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/container" element={<SolarContainer />} />
                <Route path="/selecteddItems" element={<SelectedItems />} />
                <Route path="/newcard" element={<NewCard />} />
                <Route path="/casing" element={<Casing />} />
            </Routes>
        </Router>
    );
}

export default App;

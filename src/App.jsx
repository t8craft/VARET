
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import LoginForm from './pages/Login';
import NewEmployee from './Login/NewEmployee';
import CreateEmployee from './Forms/Employee/Create';
import EmployeeLogin from './Forms/Employee/EmployeeLogin';
// import UserLogin from './Forms/User/BasicLogin';
import UserLogin from './Forms/User/BasicLogin';
import LandingPage from './pages/LandingPage';
import SocialLoginWithRedirect from './Forms/User/SocialLoginWithRedirect';
import CombinedLogin from './Forms/User/CombinedLogin';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/new_employee" element={<CreateEmployee />} />
                <Route path="/login_employee" element={<EmployeeLogin />} />
                <Route path="/login_user" element={<UserLogin />} />
                <Route path="/landing_page" element={<LandingPage />} />
                <Route path="/social_only" element={<SocialLoginWithRedirect />} />

                <Route path="/combined_login" element={<CombinedLogin />} />
                

            </Routes>
        </Router>
    );
}

export default App; 

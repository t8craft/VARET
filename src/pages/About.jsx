
import { Link } from 'react-router-dom';

function About() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-3xl font-bold">About Page</h1>
            <Link to="/" className="mt-4 text-blue-500">Go to Home Page</Link>
        </div>
    );
}

export default About;

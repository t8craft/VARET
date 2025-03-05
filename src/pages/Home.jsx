
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-3xl font-bold">Home Page</h1>
            <Link to="/about" className="mt-4 text-blue-500">Go to About Page</Link>
        </div>
    );
}

export default Home;

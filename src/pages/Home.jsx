
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-3xl font-bold">Home Page</h1>
            <Link to="/about" className="mt-4 text-blue-500">Go to About Page</Link>
            <Link to="/frame" className="mt-2 text-blue-500">Frame</Link>
            <Link to="/accordion" className="mt-2 text-blue-500">Accordion</Link>
            <Link to="/bounce" className="mt-2 text-blue-500">Bounce Test</Link>
        </div>
    );
}

export default Home;

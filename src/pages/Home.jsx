
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-3xl font-bold">Home Page</h1>
            <Link to="/about" className="mt-4 text-blue-500">Go to About Page</Link>
            <Link to="/login" className="mt-4 text-blue-500">Login (Social Login) </Link>
            <Link to="/new_employee" className="mt-4 text-blue-500">New Employee </Link>
            <Link to="/landing_page" className="mt-4 text-blue-500">Landing_Page </Link>
            <Link to="/login_employee" className="mt-4 text-blue-500">LoginEmployee </Link>
            <Link to="/login_user" className="mt-4 text-blue-500">Login User (No Social) </Link>
            <Link to="/social_only" className="mt-4 text-blue-500">Social Only </Link>
            <Link to="/combined_login" className="mt-4 text-blue-500">Combined Login</Link>
            <Link to="/area_create" className="mt-4 text-blue-500">Create Area</Link>
            <Link to="/section_create" className="mt-4 text-blue-500">Create Section</Link>
            <Link to="/image_create" className="mt-4 text-blue-500">Upload Image</Link>
            <Link to="/scrap" className="mt-4 text-blue-500">Scrap Images</Link>
        </div>
    );
}

export default Home;


//  <Link to="/login_user" className="mt-4 text-blue-500">Login User (No Social) </Link>
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import CombinedLogin from "../Forms/User/CombinedLogin";

function LandingPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    // Extract JWT from query parameters
    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const token = queryParams.get("token");

        if (!token) {
            console.error("No token provided");
            setUser(null); // Set user to null if token is missing
            return;
        }

        // Decode JWT and set user data
        try {
            const decodedToken = JSON.parse(atob(token.split(".")[1])); // Decode JWT payload
            if (decodedToken.exp * 1000 < Date.now()) {
                console.error("Token has expired");
                setUser(null); // Set user to null if token is expired
                return;
            }
            setUser(decodedToken.user); // Extract user details from the token
        } catch (error) {
            console.error("Invalid token:", error);
            setUser(null); // Set user to null if token is invalid
        }
    }, [location]);

    return (
        <div className="flex justify-center items-center p-4 bg-gray-100 min-h-screen">
            <div className="text-center">
                {user ? (
                    <>
                        <h1 className="text-3xl font-bold">Welcome to the Landing Page</h1>
                        <div className="text-lg font-semibold text-gray-700 mt-4">
                            <p>Logged in as: <span className="text-blue-500">{user.name}</span></p>
                            <p>Email: <span className="text-blue-500">{user.email}</span></p>
                            {user.avatar && (
                                <img
                                    src={user.avatar}
                                    alt="User Avatar"
                                    className="w-16 h-16 rounded-full mt-4 mx-auto"
                                />
                            )}
                        </div>
                    </>
                ) : (

                    <div>
                            <h1 className="text-3xl font-bold text-red-500">NO USER LOGGED IN</h1>
                            {/* Form with both Normal or Social Login options */}

                            <CombinedLogin/>

                    </div>
                    
                    
                )}
            </div>
        </div>
    );
}

export default LandingPage;


// ************ THIS OPTION BELOW (CODE SNIPPET ), WILL REDIRECT TO THE "/" HOME PAGE IF THE USER IS NOT LOGGED IN OR IF THE TOKEN IS INVALID OR EXPIRED. **********

// import { useLocation, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";

// function LandingPage() {
//     const location = useLocation();
//     const navigate = useNavigate();
//     const [user, setUser] = useState(null);

//     // Extract JWT from query parameters
//     useEffect(() => {
//         const queryParams = new URLSearchParams(location.search);
//         const token = queryParams.get("token");

//         if (!token) {
//             navigate("/"); // Redirect to login if token is missing
//             return;
//         }

//         // Decode JWT and set user data
//         try {
//             const decodedToken = JSON.parse(atob(token.split(".")[1])); // Decode JWT payload
//             if (decodedToken.exp * 1000 < Date.now()) {
//                 console.error("Token has expired");
//                 navigate("/"); // Redirect to login if token is expired
//                 return;
//             }
//             setUser(decodedToken.user); // Extract user details from the token
//         } catch (error) {
//             console.error("Invalid token:", error);
//             navigate("/"); // Redirect to login if token is invalid
//         }
//     }, [location, navigate]);

//     // Logout function
//     const handleLogout = () => {
//         setUser(null); // Clear user state
//         navigate("/"); // Redirect to login page
//     };

//     return (
//         <div className="flex justify-between items-center p-4 bg-gray-100 min-h-screen">
//             <h1 className="text-3xl font-bold">Welcome to the Landing Page</h1>
//             <div className="text-lg font-semibold text-gray-700">
//                 {user ? (
//                     <>
//                         <p>Logged in as: <span className="text-blue-500">{user.name}</span></p>
//                         <p>Email: <span className="text-blue-500">{user.email}</span></p>
//                         {user.avatar && (
//                             <img
//                                 src={user.avatar}
//                                 alt="User Avatar"
//                                 className="w-16 h-16 rounded-full mt-4"
//                             />
//                         )}

//                         <button
//                             onClick={handleLogout}
//                             className="mt-6 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
//                         >
//                             Logout
//                         </button>
//                     </>
//                 ) : (
//                     <p className="text-red-500">Error: User information is missing.</p>
//                 )}
//             </div>
//         </div>
//     );
// }

// export default LandingPage;

///////////////////


// import { useLocation, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";

// function LandingPage() {
//     const location = useLocation();
//     const navigate = useNavigate();
//     const [user, setUser] = useState(null);

//     // Extract JWT from query parameters
//     useEffect(() => {
//         const queryParams = new URLSearchParams(location.search);
//         const token = queryParams.get("token");

//         if (!token) {
//             navigate("/"); // Redirect to login if token is missing
//             return;
//         }

//         // Decode JWT and set user data
//         try {
//             const decodedToken = JSON.parse(atob(token.split(".")[1])); // Decode JWT payload
//             setUser(decodedToken);
//         } catch (error) {
//             console.error("Invalid token:", error);
//             navigate("/"); // Redirect to login if token is invalid
//         }
//     }, [location, navigate]);

//     return (
//         <div className="flex justify-between items-center p-4 bg-gray-100 min-h-screen">
//             <h1 className="text-3xl font-bold">Welcome to the Landing Page</h1>
//             <div className="text-lg font-semibold text-gray-700">
//                 {user ? (
//                     <>
//                         <p>Logged in as: <span className="text-blue-500">{user.name}</span></p>
//                         <p>Email: <span className="text-blue-500">{user.email}</span></p>
//                         {user.avatar && (
//                             <img
//                                 src={user.avatar}
//                                 alt="User Avatar"
//                                 className="w-16 h-16 rounded-full mt-4"
//                             />
//                         )}
//                     </>
//                 ) : (
//                     <p className="text-red-500">Error: User information is missing.</p>
//                 )}
//             </div>
//         </div>
//     );
// }

// export default LandingPage;



// import { useLocation, useNavigate } from "react-router-dom";
// import { useEffect } from "react";

// function LandingPage() {
//     const location = useLocation();
//     const navigate = useNavigate();

//     // Extract the user object from query parameters
//     const queryParams = new URLSearchParams(location.search);
//     const user = queryParams.get("user") ? JSON.parse(queryParams.get("user")) : null;

//     // Redirect to login if user data is missing
//     useEffect(() => {
//         if (!user || !user.name || !user.email) {
//             navigate("/"); // Redirect to login page
//         }
//     }, [user, navigate]);

//     return (
//         <div className="flex justify-between items-center p-4 bg-gray-100 min-h-screen">
//             <h1 className="text-3xl font-bold">Welcome to the Landing Page</h1>
//             <div className="text-lg font-semibold text-gray-700">
//                 {user ? (
//                     <>
//                         <p>Logged in as: <span className="text-blue-500">{user.name}</span></p>
//                         <p>Email: <span className="text-blue-500">{user.email}</span></p>
//                         {user.avatar && (
//                             <img
//                                 src={user.avatar}
//                                 alt="User Avatar"
//                                 className="w-16 h-16 rounded-full mt-4"
//                             />
//                         )}
//                     </>
//                 ) : (
//                     <p className="text-red-500">Error: User information is missing.</p>
//                 )}
//             </div>
//         </div>
//     );
// }

// export default LandingPage;





// import { useLocation, useNavigate } from "react-router-dom";
// import { useEffect } from "react";

// function LandingPage() {
//     const location = useLocation();
//     const navigate = useNavigate();

//     // Check if state exists, otherwise redirect to login
//     useEffect(() => {
//         if (!location.state || (!location.state.name && !location.state.email)) {
//             navigate("/"); // Redirect to login page if state is missing
//         }
//     }, [location, navigate]);

//     const { name, email } = location.state || {};

//     return (
//         <div className="flex justify-between items-center p-4 bg-gray-100 min-h-screen">
//             <h1 className="text-3xl font-bold">Welcome to the Landing Page</h1>
//             <div className="text-lg font-semibold text-gray-700">
//                 {name && email ? (
//                     <>
//                         <p>Logged in as: <span className="text-blue-500">{name}</span></p>
//                         <p>Email: <span className="text-blue-500">{email}</span></p>
//                     </>
//                 ) : (
//                     <p className="text-red-500">Error: User information is missing.</p>
//                 )}
//             </div>
//         </div>
//     );
// }

// export default LandingPage;




// import { useLocation } from "react-router-dom";

// function LandingPage() {
//     const location = useLocation();
//     const { name, email } = location.state || { name: "Guest", email: "N/A" }; // Default values

//     return (
//         <div className="flex justify-between items-center p-4 bg-gray-100 min-h-screen">
//             <h1 className="text-3xl font-bold">Welcome to the Landing Page</h1>
//             <div className="text-lg font-semibold text-gray-700">
//                 <p>Logged in as: <span className="text-blue-500">{name}</span></p>
//                 <p>Email: <span className="text-blue-500">{email}</span></p>
//             </div>
//         </div>
//     );
// }

// export default LandingPage;
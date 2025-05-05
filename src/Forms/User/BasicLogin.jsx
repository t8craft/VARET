import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection

function UserLogin() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [message, setMessage] = useState("");
    const [isError, setIsError] = useState(false);
    const [token, setToken] = useState(null); // Store the JWT token
    const navigate = useNavigate(); // Initialize useNavigate

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");
        setIsError(false);

        try {
            // const response = await fetch("http://127.0.0.1:5000/user/login", {
            const response = await fetch("http://127.0.0.1:5000/user/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage("✅ Login successful!");
                setToken(data.token); // Save the JWT token
                console.log("JWT Token:", data.token);

                // Redirect to /landing_page with the user's name
                // navigate("/landing_page", { state: { name: data.user.name, email: data.user.email } });
                navigate(`/landing_page?token=${data.token}`);
            } else {
                setMessage(`❌ ${data.error || "Login failed"}`);
                setIsError(true);
            }
        } catch (error) {
            setMessage("❌ Login failed. Please try again.");
            setIsError(true);
            console.error("Login Error:", error);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-semibold text-center mb-4">User Login</h2>

                {/* Success/Error Message */}
                {message && (
                    <div className={`p-2 text-center ${isError ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"} rounded-md mb-4`}>
                        {message}
                    </div>
                )}

                {/* Login Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-600">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-md"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-600">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-md"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
                    >
                        Login
                    </button>
                </form>

                {/* Display JWT Token */}
                {token && (
                    <div className="mt-4 p-2 bg-gray-100 text-gray-700 rounded-md">
                        <p className="text-sm break-words">JWT Token: {token}</p>
                    </div>
                )}

                <div className="bg-gray-200 rounded-md p-5 mt-4">
                    <p className="font-semibold text-gray-700">Example</p>
                    <div className="text-slate-600">
                        <p>email : qujybev@mailinator.com</p>
                        <p>password: p455w0r!d@123</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserLogin;




// import { useState } from "react";

// function UserLogin() {
//     const [formData, setFormData] = useState({
//         email: "",
//         password: "",
//     });

//     const [message, setMessage] = useState("");
//     const [isError, setIsError] = useState(false);
//     const [token, setToken] = useState(null); // Store the JWT token

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setMessage("");
//         setIsError(false);

//         try {
//             const response = await fetch("http://127.0.0.1:5000/define/login", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify(formData),
//             });

//             const data = await response.json();

//             if (response.ok) {
//                 setMessage("✅ Login successful!");
//                 setToken(data.token); // Save the JWT token
//                 console.log("JWT Token:", data.token);
//             } else {
//                 setMessage(`❌ ${data.error || "Login failed"}`);
//                 setIsError(true);
//             }
//         } catch (error) {
//             setMessage("❌ Login failed. Please try again.");
//             setIsError(true);
//             console.error("Login Error:", error);
//         }
//     };

//     return (
//         <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//             <div className="bg-white p-6 rounded-lg shadow-md w-96">
//                 <h2 className="text-2xl font-semibold text-center mb-4">User Login</h2>

//                 {/* Success/Error Message */}
//                 {message && (
//                     <div className={`p-2 text-center ${isError ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"} rounded-md mb-4`}>
//                         {message}
//                     </div>
//                 )}

//                 {/* Login Form */}
//                 <form onSubmit={handleSubmit} className="space-y-4">
//                     <div>
//                         <label className="block text-gray-600">Email</label>
//                         <input
//                             type="email"
//                             name="email"
//                             value={formData.email}
//                             onChange={handleChange}
//                             className="w-full p-2 border rounded-md"
//                             required
//                         />
//                     </div>
//                     <div>
//                         <label className="block text-gray-600">Password</label>
//                         <input
//                             type="password"
//                             name="password"
//                             value={formData.password}
//                             onChange={handleChange}
//                             className="w-full p-2 border rounded-md"
//                             required
//                         />
//                     </div>
//                     <button
//                         type="submit"
//                         className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
//                     >
//                         Login
//                     </button>
//                 </form>

//                 {/* Display JWT Token */}
//                 {token && (
//                     <div className="mt-4 p-2 bg-gray-100 text-gray-700 rounded-md">
//                         <p className="text-sm break-words">JWT Token: {token}</p>
//                     </div>
//                 )}


//                 <div className="bg-gray-200 rounded-md p-5 mt-4">
                                    
//                     <p className="font-semibold text-gray-700">Example</p>

//                     <div className="text-slate-600">
//                         <p>email : qujybev@mailinator.com</p> 
//                         <p>password: p455w0r!d@123</p> 
//                     </div>

                                                            
                                
//                 </div> 



//             </div>
//         </div>
//     );
// }

// export default UserLogin;
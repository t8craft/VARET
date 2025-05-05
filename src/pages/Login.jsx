import { useState } from "react";
import use_google from "../Login/socialLogic"; // ✅ Import Google login function

function LoginForm() {
    const [formData, setFormData] = useState({
        name: "",
        surname: "",
        email: "",
        password: "",
    });

    const [message, setMessage] = useState(""); // ✅ State for showing success/error messages
    const [isError, setIsError] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage(""); // ✅ Clear previous messages
        setIsError(false);

        try {
            const response = await fetch("http://127.0.0.1:5000/api/users", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...formData,
                    auth_provider: "email", // ✅ Explicitly tell backend this is email signup
                }),
            });

            const data = await response.json();

            if (response.ok) {
                // setMessage("✅ Account created successfully!");
                setMessage(data.message);
            } else {
                setMessage(`❌ ${data.error || "Failed to create account"}`);
                setIsError(true);
            }

            console.log("Signup Response:", data);
        } catch (error) {
            setMessage("❌ Signup failed. Please try again.");
            setIsError(true);
            console.error("Signup Error:", error);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-semibold text-center mb-4">Create Account</h2>

                {/* ✅ Success/Error Message */}
                {message && (
                    <div className={`p-2 text-center ${isError ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"} rounded-md mb-4`}>
                        {message}
                    </div>
                )}

                {/* Email/Password Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-600">First Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-md"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-600">Surname</label>
                        <input
                            type="text"
                            name="surname"
                            value={formData.surname}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-md"
                            required
                        />
                    </div>
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
                        Sign Up
                    </button>
                </form>

                {/* Google Login Button */}
                <div className="text-center mt-4">
                    <p className="text-gray-500">or</p>
                    <button
                        onClick={() => use_google()}  // ✅ Calls the Google login function properly
                        className="mt-2 w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 flex items-center justify-center"
                    >
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" 
                             alt="Google Logo" className="w-5 h-5 mr-2" />
                        Sign in with Google
                    </button>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;





// import { useState } from "react";
// import use_google from "../Login/socialLogic"; // ✅ Import Google login function

// function LoginForm() {
//     const [formData, setFormData] = useState({
//         email: "",
//         password: "",
//     });

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         console.log("Submitting:", formData);

//         try {
//             const response = await fetch("http://127.0.0.1:5000/users", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({
//                     ...formData,
//                     auth_provider: "email"  // ✅ Explicitly tell backend this is email signup
//                 }),
//             });

//             const data = await response.json();
//             console.log("Signup Response:", data);
//         } catch (error) {
//             console.error("Signup Error:", error);
//         }
//     };

//     return (
//         <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//             <div className="bg-white p-6 rounded-lg shadow-md w-96">
//                 <h2 className="text-2xl font-semibold text-center mb-4">Create Account</h2>

//                 {/* Email/Password Form */}
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
//                         Sign Up
//                     </button>
//                 </form>

//                 {/* Google Login Button */}
//                 <div className="text-center mt-4">
//                     <p className="text-gray-500">or</p>
//                     <button
//                         onClick={() => use_google()}  // ✅ Calls the Google login function properly
//                         className="mt-2 w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 flex items-center justify-center"
//                     >
//                         <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" 
//                              alt="Google Logo" className="w-5 h-5 mr-2" />
//                         Sign in with Google
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default LoginForm;





// import { useState } from "react";
// // import use_google from "../socialLogic"; // Import Google login function
// import use_google from "../Login/socialLogic";

// function LoginForm() {
//     const [formData, setFormData] = useState({
//         email: "",
//         password: "",
//     });

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         console.log("Submitting:", formData);

//         try {
//             const response = await fetch("http://127.0.0.1:5000/auth/signup", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify(formData),
//             });

//             const data = await response.json();
//             console.log("Signup Response:", data);
//         } catch (error) {
//             console.error("Signup Error:", error);
//         }
//     };

//     return (
//         <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//             <div className="bg-white p-6 rounded-lg shadow-md w-96">
//                 <h2 className="text-2xl font-semibold text-center mb-4">Create Account</h2>

//                 {/* Email/Password Form */}
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
//                         Sign Up
//                     </button>
//                 </form>

//                 {/* Google Login Button */}
//                 <div className="text-center mt-4">
//                     <p className="text-gray-500">or</p>
//                     <button
//                         onClick={use_google}
//                         className="mt-2 w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 flex items-center justify-center"
//                     >
//                         <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" 
//                              alt="Google Logo" className="w-5 h-5 mr-2" />
//                         Sign in with Google
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default LoginForm;

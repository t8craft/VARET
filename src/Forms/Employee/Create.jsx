import { useState } from "react";

function CreateEmployee() {
    const [formData, setFormData] = useState({
        name: "",
        surname: "",
        email: "",
    });

    const [message, setMessage] = useState("");
    const [isError, setIsError] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");
        setIsError(false);

        try {
            const response = await fetch("http://127.0.0.1:5000/employees/create", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage("✅ Employee created successfully!");
            } else {
                setMessage(`❌ ${data.error || "Failed to create employee"}`);
                setIsError(true);
            }

            console.log("Employee Creation Response:", data);
        } catch (error) {
            setMessage("❌ Employee creation failed. Please try again.");
            setIsError(true);
            console.error("Employee Creation Error:", error);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-semibold text-center mb-4">Create Employee</h2>

                {/* Success/Error Message */}
                {message && (
                    <div className={`p-2 text-center ${isError ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"} rounded-md mb-4`}>
                        {message}
                    </div>
                )}

                {/* Employee Form */}
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
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
                    >
                        Create Employee
                    </button>
                </form>
            </div>
        </div>
    );
}

export default CreateEmployee;





// import { useState } from "react";

// function CreateEmployee() {
//     const [formData, setFormData] = useState({
//         name: "",
//         surname: "",
//         email: "",
//         admin_email: "",
//     });

//     const [message, setMessage] = useState("");
//     const [isError, setIsError] = useState(false);

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setMessage("");
//         setIsError(false);

//         try {
//             const response = await fetch("http://127.0.0.1:5000/employees/create", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify(formData),
//             });

//             const data = await response.json();

//             if (response.ok) {
//                 setMessage("✅ Employee created successfully!");
//             } else {
//                 setMessage(`❌ ${data.error || "Failed to create employee"}`);
//                 setIsError(true);
//             }

//             console.log("Employee Creation Response:", data);
//         } catch (error) {
//             setMessage("❌ Employee creation failed. Please try again.");
//             setIsError(true);
//             console.error("Employee Creation Error:", error);
//         }
//     };

//     return (
//         <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//             <div className="bg-white p-6 rounded-lg shadow-md w-96">
//                 <h2 className="text-2xl font-semibold text-center mb-4">Create Employee</h2>

//                 {/* Success/Error Message */}
//                 {message && (
//                     <div className={`p-2 text-center ${isError ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"} rounded-md mb-4`}>
//                         {message}
//                     </div>
//                 )}

//                 {/* Employee Form */}
//                 <form onSubmit={handleSubmit} className="space-y-4">
//                     <div>
//                         <label className="block text-gray-600">First Name</label>
//                         <input
//                             type="text"
//                             name="name"
//                             value={formData.name}
//                             onChange={handleChange}
//                             className="w-full p-2 border rounded-md"
//                             required
//                         />
//                     </div>
//                     <div>
//                         <label className="block text-gray-600">Surname</label>
//                         <input
//                             type="text"
//                             name="surname"
//                             value={formData.surname}
//                             onChange={handleChange}
//                             className="w-full p-2 border rounded-md"
//                             required
//                         />
//                     </div>
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
//                         <label className="block text-gray-600">Admin Email</label>
//                         <input
//                             type="email"
//                             name="admin_email"
//                             value={formData.admin_email}
//                             onChange={handleChange}
//                             className="w-full p-2 border rounded-md"
//                             required
//                         />
//                     </div>
//                     <button
//                         type="submit"
//                         className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
//                     >
//                         Create Employee
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default CreateEmployee;
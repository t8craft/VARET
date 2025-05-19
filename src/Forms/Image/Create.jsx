import React, { useState, useEffect } from "react";

const UploadImageForm = () => {
    const [file, setFile] = useState(null);
    const [areaId, setAreaId] = useState("");
    const [sectionId, setSectionId] = useState("");
    const [areas, setAreas] = useState([]); // List of areas
    const [sections, setSections] = useState([]); // List of sections
    const [message, setMessage] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);

    // Fetch areas from the backend
    useEffect(() => {
        const fetchAreas = async () => {
            try {
                const response = await fetch("http://127.0.0.1:5000/area/areas");
                if (response.ok) {
                    const data = await response.json();
                    setAreas(data);
                } else {
                    console.error("Failed to fetch areas");
                }
            } catch (error) {
                console.error("Error fetching areas:", error);
            }
        };

        fetchAreas();
    }, []);

    // Fetch sections from the backend
    useEffect(() => {
        const fetchSections = async () => {
            try {
                const response = await fetch("http://127.0.0.1:5000/sections");
                if (response.ok) {
                    const data = await response.json();
                    setSections(data);
                } else {
                    console.error("Failed to fetch sections");
                }
            } catch (error) {
                console.error("Error fetching sections:", error);
            }
        };

        fetchSections();
    }, []);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!file) {
            setMessage("Please select a file to upload.");
            setIsSuccess(false);
            return;
        }

        const formData = new FormData();
        formData.append("file", file);
        formData.append("area_id", areaId);
        formData.append("section_id", sectionId);

        try {
            const response = await fetch("http://127.0.0.1:5000/image/images", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                const data = await response.json();
                setMessage("Image uploaded successfully!");
                setIsSuccess(true);
                console.log("Uploaded Image:", data);
                setFile(null);
                setAreaId("");
                setSectionId("");
            } else {
                const errorData = await response.json();
                setMessage(`Error: ${errorData.error || "Failed to upload image"}`);
                setIsSuccess(false);
            }
        } catch (error) {
            setMessage(`Error: ${error.message}`);
            setIsSuccess(false);
        }
    };

    return (
        <div className="p-4 max-w-md mx-auto bg-white shadow-md rounded-md mt-4">
            <h1 className="text-2xl font-bold mb-4">Upload Image</h1>
            {message && (
                <p
                    className={`mb-4 text-center text-sm text-white py-2 px-4 rounded-md ${
                        isSuccess ? "bg-green-500" : "bg-red-500"
                    }`}
                >
                    {message}
                </p>
            )}
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="file" className="block text-sm font-medium text-gray-700">
                        Select Image
                    </label>
                    <input
                        type="file"
                        id="file"
                        onChange={handleFileChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="areaId" className="block text-sm font-medium text-gray-700">
                        Select Area (Optional)
                    </label>
                    <select
                        id="areaId"
                        value={areaId}
                        onChange={(e) => setAreaId(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    >
                        <option value="">None</option>
                        {areas.map((area) => (
                            <option key={area.id} value={area.id}>
                                {area.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="sectionId" className="block text-sm font-medium text-gray-700">
                        Select Section (Optional)
                    </label>
                    <select
                        id="sectionId"
                        value={sectionId}
                        onChange={(e) => setSectionId(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    >
                        <option value="">None</option>
                        {sections.map((section) => (
                            <option key={section.id} value={section.id}>
                                {section.name}
                            </option>
                        ))}
                    </select>
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                >
                    Upload Image
                </button>
            </form>
        </div>
    );
};

export default UploadImageForm;


// import React, { useState } from "react";

// const UploadImageForm = () => {
//     const [file, setFile] = useState(null);
//     const [areaId, setAreaId] = useState("");
//     const [sectionId, setSectionId] = useState("");
//     const [message, setMessage] = useState("");
//     const [isSuccess, setIsSuccess] = useState(false);

//     const handleFileChange = (e) => {
//         setFile(e.target.files[0]);
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         if (!file) {
//             setMessage("Please select a file to upload.");
//             setIsSuccess(false);
//             return;
//         }

//         const formData = new FormData();
//         formData.append("file", file);
//         formData.append("area_id", areaId);
//         formData.append("section_id", sectionId);

//         try {
//             const response = await fetch("http://127.0.0.1:5000/image/images", {
//                 method: "POST",
//                 body: formData,
//             });

//             if (response.ok) {
//                 const data = await response.json();
//                 setMessage("Image uploaded successfully!");
//                 setIsSuccess(true);
//                 console.log("Uploaded Image:", data);
//                 setFile(null);
//                 setAreaId("");
//                 setSectionId("");
//             } else {
//                 const errorData = await response.json();
//                 setMessage(`Error: ${errorData.error || "Failed to upload image"}`);
//                 setIsSuccess(false);
//             }
//         } catch (error) {
//             setMessage(`Error: ${error.message}`);
//             setIsSuccess(false);
//         }
//     };

//     return (
//         <div className="p-4 max-w-md mx-auto bg-white shadow-md rounded-md mt-4">
//             <h1 className="text-2xl font-bold mb-4">Upload Image</h1>
//             {message && (
//                 <p
//                     className={`mb-4 text-center text-sm text-white py-2 px-4 rounded-md ${
//                         isSuccess ? "bg-green-500" : "bg-red-500"
//                     }`}
//                 >
//                     {message}
//                 </p>
//             )}
//             <form onSubmit={handleSubmit}>
//                 <div className="mb-4">
//                     <label htmlFor="file" className="block text-sm font-medium text-gray-700">
//                         Select Image
//                     </label>
//                     <input
//                         type="file"
//                         id="file"
//                         onChange={handleFileChange}
//                         className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                         required
//                     />
//                 </div>
//                 <div className="mb-4">
//                     <label htmlFor="areaId" className="block text-sm font-medium text-gray-700">
//                         Area ID (Optional)
//                     </label>
//                     <input
//                         type="text"
//                         id="areaId"
//                         value={areaId}
//                         onChange={(e) => setAreaId(e.target.value)}
//                         className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                     />
//                 </div>
//                 <div className="mb-4">
//                     <label htmlFor="sectionId" className="block text-sm font-medium text-gray-700">
//                         Section ID (Optional)
//                     </label>
//                     <input
//                         type="text"
//                         id="sectionId"
//                         value={sectionId}
//                         onChange={(e) => setSectionId(e.target.value)}
//                         className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                     />
//                 </div>
//                 <button
//                     type="submit"
//                     className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
//                 >
//                     Upload Image
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default UploadImageForm;
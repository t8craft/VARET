import React, { useState, useEffect } from 'react';

const CreateSection = () => {
    const [name, setName] = useState('');
    const [areaId, setAreaId] = useState('');
    const [areas, setAreas] = useState([]); // List of areas for the dropdown
    const [message, setMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);

    // Fetch areas for the dropdown
    useEffect(() => {
        const fetchAreas = async () => {
            try {
                const response = await fetch('http://127.0.0.1:5000/area/areas'); // Adjust the endpoint if needed
                if (response.ok) {
                    const data = await response.json();
                    setAreas(data);
                } else {
                    console.error('Failed to fetch areas');
                }
            } catch (error) {
                console.error('Error fetching areas:', error);
            }
        };

        fetchAreas();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const sectionData = {
            name,
            area_id: areaId || null, // Send null if no area is selected
        };

        try {
            const response = await fetch('http://127.0.0.1:5000/section/sections', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(sectionData),
            });

            if (response.ok) {
                setMessage('Section created successfully!');
                setIsSuccess(true);
                setName('');
                setAreaId('');
            } else {
                const errorData = await response.json();
                setMessage(`Error: ${errorData.error || 'Failed to create section'}`);
                setIsSuccess(false);
            }
        } catch (error) {
            setMessage(`Error: ${error.message}`);
            setIsSuccess(false);
        }
    };

    return (
        <div className="p-4 max-w-md mx-auto bg-white shadow-md rounded-md mt-4">
            <h1 className="text-2xl font-bold mb-4">Create Section</h1>
            {message && (
                <p
                    className={`mb-4 text-center text-sm text-white py-2 px-4 rounded-md ${
                        isSuccess ? 'bg-green-500' : 'bg-red-500'
                    }`}
                >
                    {message}
                </p>
            )}
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Section Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="area" className="block text-sm font-medium text-gray-700">
                        Select Area (Optional)
                    </label>
                    <select
                        id="area"
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
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                >
                    Create Section
                </button>
            </form>
        </div>
    );
};

export default CreateSection;
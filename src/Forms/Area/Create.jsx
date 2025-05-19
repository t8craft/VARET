import React, { useState } from 'react';

const CreateArea = () => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(false); // Track success or failure

    const handleSubmit = async (e) => {
        e.preventDefault();

        const areaData = { name };

        try {
            const response = await fetch('http://127.0.0.1:5000/area/areas', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(areaData),
            });

            if (response.ok) {
                setMessage('Area created successfully!');
                setIsSuccess(true); // Set success state
                setName(''); // Clear the input field
            } else {
                const errorData = await response.json();
                setMessage(`Error: ${errorData.message || 'Failed to create area'}`);
                setIsSuccess(false); // Set failure state
            }
        } catch (error) {
            setMessage(`Error: ${error.message}`);
            setIsSuccess(false); // Set failure state
        }
    };

    return (
        <div className="p-4 max-w-md mx-auto bg-white shadow-md rounded-md mt-4">
            <h1 className="text-2xl font-bold mb-4">Create Area</h1>
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
                        Area Name
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
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                >
                    Create Area
                </button>
            </form>
        </div>
    );
};

export default CreateArea;
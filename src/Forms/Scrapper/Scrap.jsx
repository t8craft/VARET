// ScrapperForm.jsx
import React, { useState } from "react";

const ScrapperForm = () => {
  const [url, setUrl] = useState("");
  const [saveFolder, setSaveFolder] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!url) {
      setMessage("Please enter a URL.");
      setIsSuccess(false);
      return;
    }

    try {
      const response = await fetch("http://127.0.0.1:5000/scrap/scrap/images", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          url,
          save_folder: saveFolder || undefined,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage(data.message);
        setIsSuccess(true);
      } else {
        setMessage(data.error || "Failed to start image download.");
        setIsSuccess(false);
      }
    } catch (error) {
      setMessage("Network error: " + error.message);
      setIsSuccess(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Scrap Images from URL</h2>
      {message && (
        <div
          className={`mb-4 p-2 rounded ${
            isSuccess ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
          }`}
        >
          {message}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <label className="block mb-2 font-medium">
          Target URL
          <input
            type="text"
            className="block w-full border rounded px-3 py-2 mt-1"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://example.com"
            required
          />
        </label>
        <label className="block mb-4 font-medium">
          Save Folder (optional)
          <input
            type="text"
            className="block w-full border rounded px-3 py-2 mt-1"
            value={saveFolder}
            onChange={(e) => setSaveFolder(e.target.value)}
            placeholder="downloaded_images"
          />
        </label>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Scrap Images
        </button>
      </form>
    </div>
  );
};

export default ScrapperForm;
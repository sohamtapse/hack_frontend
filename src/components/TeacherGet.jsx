import React, { useState } from "react";
import axios from "axios";

const TeacherGet = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select a PDF file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      setLoading(true);
      const res = await axios.post(
        "https://cc17-103-249-89-165.ngrok-free.app/upload",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      setResponse(res.data);
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("File upload failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-zinc-700 p-6 sm:p-10 mt-5 text-white border-white border-2 rounded-xl w-[90%] sm:w-[450px]">
      <h1 className="text-2xl sm:text-3xl font-bold mb-5 text-center">
        Answer key Repository
      </h1>

      <input
        type="file"
        accept="application/pdf"
        onChange={handleFileChange}
        className="mb-4 bg-white text-black p-2 rounded w-full"
      />

      <button
        onClick={handleUpload}
        className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded text-white w-full"
        disabled={loading}
      >
        {loading ? "Uploading..." : "Upload"}
      </button>

      {response && (
        <div className="mt-4 p-4 bg-gray-800 rounded w-full overflow-x-auto text-sm">
          <p>
            <strong>Original PDF:</strong> {response.original_pdf}
          </p>
          <p>
            <strong>PDF Path:</strong> {response.pdf_path}
          </p>
          <p>
            <strong>Extracted Text Path:</strong> {response.txt_path}
          </p>
        </div>
      )}
    </div>
  );
};

export default TeacherGet;

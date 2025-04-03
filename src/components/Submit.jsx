import React, { useState } from "react";
import axios from "axios";

const Submit = () => {
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState(null);
  const [error, setError] = useState(null);

  const handleExecuteNotebook = async () => {
    setLoading(true);
    setOutput(null);
    setError(null);

    try {
      const response = await axios.get("http://127.0.0.1:8000/getOp");

      setOutput(response.data.classification_output);
    } catch (err) {
      setError(err.response?.data?.error || "Failed to execute notebook.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center my-10  bg-zinc-700 text-white  border-white border-2 rounded-xl">
      <h1 className="text-3xl font-bold my-4"></h1>

      <button
        onClick={handleExecuteNotebook}
        className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded text-white"
        disabled={loading}
      >
        {loading ? "Executing..." : "Run Notebook"}
      </button>

      {output && (
        <div className="my-4 p-4 bg-gray-800 rounded w-3/4  ">
          <h2 className="text-xl font-bold">Classification Output:</h2>
          <pre className="text-gray-300 mt-2 whitespace-pre-wrap">{output}</pre>
        </div>
      )}

      {error && (
        <div className="mt-4 p-4 bg-red-600 rounded w-3/4 ">
          <h2 className="text-xl font-bold">Error:</h2>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default Submit;

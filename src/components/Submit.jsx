import React, { useState } from "react";
import { Axios } from "./Axios";

const Submit = () => {
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState(null);
  const [error, setError] = useState(null);

  const handleExecuteNotebook = async () => {
    setLoading(true);
    setOutput(null);
    setError(null);
    console.log("h");
    try {
      console.log("2");
      const response = await Axios.get("/getOp");
      console.log("1");
      setOutput(response.data.classification_output);
    } catch (err) {
      setError(err.response?.data?.error || "Failed to execute notebook.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center my-10 w-[95%] sm:w-[700px] lg:w-[1000px] bg-zinc-700 text-white border-white border-2 rounded-xl px-4 sm:px-8">
      <h1 className="text-2xl sm:text-3xl font-bold my-4 text-center">
        Check Your Ans
      </h1>

      <button
        onClick={handleExecuteNotebook}
        className="bg-transparent hover:bg-zinc-800 cursor-pointer border-2 border-white rounded-xl m-4 px-4 py-2  text-white w-full sm:w-[50%]"
        disabled={loading}
      >
        {loading ? "Executing..." : "Submit"}
      </button>

      {output && (
        <div className="my-4 p-4 bg-gray-800 rounded w-full sm:w-3/4 overflow-x-auto text-sm">
          <h2 className="text-lg sm:text-xl font-bold">
            Classification Output:
          </h2>
          <pre className="text-gray-300 mt-2 whitespace-pre-wrap">{output}</pre>
        </div>
      )}

      {error && (
        <div className="mt-4 p-4 bg-red-600 rounded w-full sm:w-3/4 overflow-x-auto text-sm">
          <h2 className="text-lg sm:text-xl font-bold">Error:</h2>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default Submit;

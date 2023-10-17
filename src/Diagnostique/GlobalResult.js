import React, { useState, useEffect } from "react";
import axios from "axios";

function GlobalResult() {
  const [globalResult, setGlobalResult] = useState(null);
  const userId = localStorage.getItem("userId"); // Replace with the actual user ID

  useEffect(() => {
    // Fetch the global result data from your API endpoint
    axios
      .get(`http://localhost:8081/api/users/globalResult?userId=${userId}`)
      .then((response) => {
        setGlobalResult(response.data);
      })
      .catch((error) => {
        console.error("Error fetching global result:", error);
      });
  }, [userId]);

  return (
    <div className="container">
      <h1>Global Diagnostic Result</h1>
      {globalResult ? (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Your Global Result</h5>
            <p className="card-text">
              Your global diagnostic result is: {globalResult}%
            </p>
          </div>
        </div>
      ) : (
        <p>Loading global result...</p>
      )}
    </div>
  );
}

export default GlobalResult;

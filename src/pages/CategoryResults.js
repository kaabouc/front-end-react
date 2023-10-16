import React, { useState, useEffect } from "react";
import axios from "axios";

function CategoryResults() {
  const [categoryResults, setCategoryResults] = useState({});
  const userId = 1; // Replace with the actual user ID

  useEffect(() => {
    // Fetch the category results data from your API endpoint
    axios
      .get(`http://localhost:8081/api/users/categoryResult?userId=${userId}`)
      .then((response) => {
        setCategoryResults(response.data);
      })
      .catch((error) => {
        console.error("Error fetching category results:", error);
      });
  }, [userId]);

  return (
    <div className="container">
      <h1>Category Results</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Category ID</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(categoryResults).map(([categoryId, result]) => (
            <tr key={categoryId}>
              <td>{categoryId}</td>
              <td>{result}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CategoryResults;

import React, { useState, useEffect } from "react";
import axios from "axios";

function Questionnaire() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch the questionnaire data from your API endpoint
    axios.get("http://localhost:8081/questionnaire").then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Questionnaire</h1>
      {data.map((category) => (
        <div key={category.id}>
          <h2>{category.libelle}</h2>
          {category.cat.map((subcategory) => (
            <div key={subcategory.id}>
              <h3>{subcategory.name}</h3>
              <ul>
                {subcategory.questions.map((question) => (
                  <li key={question.id}>{question.qt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Questionnaire;

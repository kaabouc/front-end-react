import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Questionnaire() {
  const [data, setData] = useState([]);
  const [responses, setResponses] = useState([]);
  const userId = localStorage.getItem("userId");
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the questionnaire data from your API endpoint
    axios.get("http://localhost:8081/questionnaire").then((response) => {
      setData(response.data);
      // Initialize responses array with default values (0 for "je suis neutre")
      const initialResponses = Array(response.data.length).fill(1); // 2 corresponds to "neutre"
      setResponses(initialResponses);
    });
  }, []);

  const handleResponseChange = (questionIndex, choiceIndex) => {
    const newResponses = [...responses];
    newResponses[questionIndex] = choiceIndex;
    setResponses(newResponses);
  };

  const handleStoreResponses = () => {
    // Create a FormData object to hold the data
    const formData = new FormData();

    // Append user ID to FormData
    formData.append("userId", userId);

    // Create arrays for questions and choices
    const questionIds = [];
    const choix = [];

    // Populate the arrays
    data.forEach((category) => {
      category.cat.forEach((subcategory) => {
        subcategory.questions.forEach((question, questionIndex) => {
          questionIds.push(question.id);
          choix.push(responses[questionIndex]);
        });
      });
    });

    // Append question IDs and choices as arrays to FormData
    formData.append("questions", questionIds);
    formData.append("choix", choix);

    axios
      .post("http://localhost:8081/storeReponse", formData)
      .then((response) => {
        if(response.data="stored correctly"){     
           console.log("Responses stored successfully:", response.data);
        navigate('/CategoryResults');}
        else{
          console.log("storage field")
        }
  
      })
      .catch((error) => {
        console.error("Error storing responses:", error);
      });
  };

  return (
    <div className="container">
      <h1>Questionnaire</h1>
      {data.map((category, categoryIndex) => (
        <div key={category.id} className="mt-4">
          <h2>{category.libelle}</h2>
          {category.cat.map((subcategory, subcategoryIndex) => (
            <div key={subcategory.id} className="mt-3">
              <h3>{subcategory.name}</h3>
              <ol>
                {subcategory.questions.map((question, questionIndex) => (
                  <li key={question.id} className="mb-3">
                    {question.qt}
                    <form>
                      {["d'accord","neutre", "pas d'accord", "en désaccord","tout à fait d'accord"].map((choice, choiceIndex) => (
                        <div className="form-check" key={choiceIndex}>
                          <input
                            className="form-check-input"
                            type="radio"
                            name={`q${question.id}`}
                            id={`q${question.id}_choice${choiceIndex}`}
                            value={choiceIndex + 1}
                           
                            onChange={() => handleResponseChange(questionIndex, choiceIndex + 1)}
                          />
                          <label className="form-check-label" htmlFor={`q${question.id}_choice${choiceIndex}`}>
                            {choice}
                          </label>
                        </div>
                      ))}
                    </form>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      ))}

      <button className="btn btn-primary mt-4" onClick={handleStoreResponses}>Submit Responses</button>
    </div>
  );
};

export default Questionnaire;

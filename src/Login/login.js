import React, { useState } from 'react';
import axios from 'axios';
function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  
  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post("http://localhost:8081/api/users/auth", null, {
        params: {
          username: name, // Assuming your backend uses 'email' for the name parameter
          password: password,
        },
      });
  
      // Assuming your Spring Boot backend returns a status code or message indicating success or failure
      if (response.data !== "") {
        // Successful login, you can redirect or perform other actions
        console.log(response);
        localStorage.setItem("userId",response.data.id)
        // Redirect to the diagnostique page
        window.location.href = "/questionnaire";
      } else {
        // Handle login failure (show an error message, etc.)
        console.log("Login failed");
        setError("Login failed. Please check your credentials.");
      }
    } catch (error) {
      // Handle network errors or other issues
      console.error("Error during login:", error);
      setError("An error occurred during login. Please try again.");
    }
  };
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card mt-5">
            <div className="card-body">
              <h2 className="card-title text-center">Login</h2>
              <form onSubmit={handleLogin}>
                <div className="mb-3">
                  <label className="form-label">User Name:</label>
                  <input
                     type="text"
                    
                    className="form-control"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password:</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Login</button>
              </form>
              <p  className="mt-3 text-center">
                Don't have an account? <a href="/">Sign Up</a>
              </p>
              {error && <p className="error-message" style={{color:'red' }}>{error}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  
    
  );

}



export default Login;
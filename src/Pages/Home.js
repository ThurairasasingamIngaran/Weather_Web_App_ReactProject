import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

export default function Home() {
  let navigate = useNavigate();

  const [employee, setEmployee] = useState({
    email: "",
    password: ""
  });

  const { email, password } = employee;

  const onInputChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      // Check if entered credentials are 'Admin' and '123'
      if (email === "Admin" && password === "123") {
        navigate('/weather');
      } else {
        alert("Incorrect Username or Password");
      }
    } catch (err) {
      console.error(err);
      alert("Login failed!");
    }
  };

  return (
    <div className="form-container">
      <div className='background-box-container'>
      <div className="row">
        <div className="first">
          <h2 className="text-center m-4">Login</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your Username"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="Password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter your Password"
                name="password"
                value={password}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className='buttonContainer'>
              <div className='formButton'>
                <button type="submit" className="btn btn-outline-primary">
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}

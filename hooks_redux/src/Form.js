import React, { useEffect, useState } from "react";
import "./form.css";

const Form = () => {
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [flag, setFlag] = useState(false);

  function handleData(e) {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  }

  useEffect(() => {}, [flag]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!inputData.name || !inputData.email || !inputData.password) {
      alert("All Feilds Are Mandatory!!!");
    } else {
      setFlag(true);
    }
  }

  return (
    <>
      <span>
        {flag ? (
          <h2>Hiii, {inputData.name}!! Welcome to the coding world</h2>
        ) : (
          ""
        )}
      </span>

      <form onSubmit={handleSubmit}>
        <h1>Registration Form</h1>
        <input
          type="text"
          name="name"
          placeholder="Enter Your Name"
          value={inputData.name}
          onChange={handleData}
        />
        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          value={inputData.email}
          onChange={handleData}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter Your Password"
          value={inputData.password}
          onChange={handleData}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Form;

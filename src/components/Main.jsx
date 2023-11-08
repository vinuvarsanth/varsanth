import React from "react";

const Main = () => {
  const styling = {
    textAlign: "center",
    position: "fixed",
    middle: 20,
    left: 20,
    right: 20,
    padding: "10px",
    fontSize: "24px",
  };
  return (
    <form style={styling}>
      <div>
        <p>
          <label htmlFor="FirstName">FirstName : </label>
          <input type="text" id="FirstName" name="FirstName" />
        </p>
      </div>
      <div>
        <p>
          <label htmlFor="LastName">LastName : </label>
          <input type="text" id="LastName" name="LastName" />
        </p>
      </div>
      <div>
        <p>
          <label htmlFor="username">Username : </label>
          <input type="text" id="username" name="username" />
        </p>
      </div>
      <div>
        <p>
          <label htmlFor="password">Password : </label>
          <input type="password" id="password" name="password" />
        </p>
      </div>
      <div>
        <button style={{ type: "submit", fontSize: "20px" }}>Submit</button>
      </div>
    </form>
  );
};
export default Main;

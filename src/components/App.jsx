import React, { useState } from "react";

function App() {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [h1, setH1] = useState("Hello");

  function handleChangeFName(event) {
    setFName(event.target.value);
  }

  function handleChangeLName(event) {
    setLName(event.target.value);
  }
  function handleSubmit(event) {
    setH1(`Hello ${fName} ${lName}`);
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>{h1}</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="fName"
          placeholder="First Name"
          onChange={handleChangeFName}
          value={fName}
        />
        <input
          name="lName"
          placeholder="Last Name"
          onChange={handleChangeLName}
          value={lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;

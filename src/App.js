import React from "react";
import "./App.css";
import CustomForm from "./components/customForm/customForm.js";
import Display from "./components/weatherDisplay/weatherDisplay.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <CustomForm />
          <Display />
        </div>
      </div>
    </div>
  );
}

export default App;

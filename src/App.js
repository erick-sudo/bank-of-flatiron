import React from "react";
import { useState } from "react";
import "./App.css"


function App() {

  const [transactions, setTransaction] = useState([]);

  return (
    <div className="App">
    <h1 className="heading">Bank of Flatiron</h1>
    <p className="welcome">Welcome to the Bank of Flatiron, where you can trust us with all your financial data! Use the below gif as an example of how the app should function.</p>
    <button type="button" className="big-button">The Royal Bank of Flatiron</button>
    </div>
  );
}

export default App;

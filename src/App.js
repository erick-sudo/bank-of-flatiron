import React from "react";
import { useState, useEffect } from "react";
import "./App.css"
import Search from "./components/Search";
import TransactionForm from "./components/TransactionForm";
import Transactions from "./components/Transactions";


function App() {
  const [searchString, setSearchString] = useState("")
  const [transactions, setTransaction] = useState([]);

  function handleInput(event) {
    setSearchString(event.target.value)
  }

  function fetchTransactions(url) {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        setTransaction(data)
      })
  }

  function addTransaction(transaction) {
    setTransaction([...transactions, transaction])
  }

  useEffect(() => {
    fetchTransactions("http://localhost:4000/transactions")
  }, [])

  return (
    <div className="App">
      <div className="header">
        <h1 className="heading">Bank of Flatiron</h1>
        <p className="welcome">Welcome to the Bank of Flatiron, where you can trust us with all your financial data! Use the below gif as an example of how the app should function.</p>
        <button type="button" className="big-button">The Royal Bank of Flatiron</button>
      </div>

      <Search handleInput={handleInput} searchString={searchString}  />
      <TransactionForm addTransaction={addTransaction} />
      <Transactions transactions={transactions} setTransaction={setTransaction} />
    </div>
  );
}

export default App;

import React from "react";
import { useState, useEffect } from "react";
import "./App.css"
import { Search, Sortby} from "./components/Search";
import TransactionForm from "./components/TransactionForm";
import Transactions from "./components/Transactions";


function App() {
  const [searchString, setSearchString] = useState("")
  const [transactions, setTransaction] = useState([]);
  const [sortBy, setSortBy] = useState("description")
  const [sort, setSort] = useState(false)
  const [sortDirection, setSortDirection] = useState("desc")

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

  function removeTransaction(id) {
    const newTransactions = transactions.filter(transaction => transaction.id!== id)
    setTransaction(newTransactions)

    fetch(`http://localhost:4000/transactions/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
  }

  // const BIN_ID = "63c3f53215ab31599e3718da"
  // const API_KEY = "$2b$10$4u8zZ2lw4ypsd60nOFmdrOTiiAvY93Tuw2SGMpkEl4BT2qNbwbjzu"

  function addTransaction(transaction) {
    fetch("http://localhost:4000/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(transaction)
    })
    .then(response => response.json())
    .then(data => {
      setTransaction([data, ...transactions])
    })
  }

  useEffect(() => {
    fetchTransactions("http://localhost:4000/transactions")
  }, [])

  const filteredTransactions = transactions.filter(transaction => {
    if(searchString === "") {
      return true
    }
    return transaction.description.toLowerCase().includes(searchString.toLowerCase())
  })

  const sortedTransactions = sort ? [...filteredTransactions].sort((t1, t2) => {
    if(t1[sortBy] > t2[sortBy]) {
      return sortDirection === "asc" ? 1 : -1
    }
    if(t1[sortBy] < t2[sortBy]) {
      return sortDirection === "asc" ? -1 : 1
    }

    return 0
  }) : filteredTransactions

  return (
    <div className="App">
      <div className="header">
        <h1 className="heading">Bank of Flatiron</h1>
        <p className="welcome">Welcome to the Bank of Flatiron, where you can trust us with all your financial data!</p>
        <button type="button" className="big-button">The Royal Bank of Flatiron</button>
      </div>

      <Search handleInput={handleInput} searchString={searchString}  />
      <TransactionForm addTransaction={addTransaction} />
      <Sortby sort={sort} setSort={setSort} sortBy={sortBy} setSortBy={setSortBy} sortDirection={sortDirection} setSortDirection={setSortDirection} />
      <Transactions transactions={sortedTransactions} removeTransaction={removeTransaction} />
    </div>
  );
}

export default App;

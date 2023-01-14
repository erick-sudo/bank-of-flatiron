import React from "react";

function TransactionForm({addTransaction}) {

    function handleSubmit(event) {
        event.preventDefault();
        const transactionObject = {
            date: event.target.date.value,
            description: event.target.description.value,
            category: event.target.category.value,
            amount: event.target.amount.value
        }
        addTransaction(transactionObject)
    }

    return (
        <div className="transaction-form">
            <form onSubmit={handleSubmit}>
                <div className="inputs">
                    <label>Date</label>
                    <input name="date" type="date" />
                    <input name="description" type="text" placeholder="Description" />
                    <input name="category" type="text" placeholder="Category" />
                    <input name="amount" type="number" placeholder="Amount" />
                </div>
                <button type="submit">Add Transaction</button>
            </form>
        </div>
    )
}

export default TransactionForm
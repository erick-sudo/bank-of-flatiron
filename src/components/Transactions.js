import React from "react";
import DeleteTransactionButton from "./DeleteTransactionButton"

function Transactions({transactions, removeTransaction}) {
    return (
        <div className="table">
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Amount</th>
                        
                    </tr>
                </thead>
                <tbody>
                {
                    transactions.map(transaction => {
                        return (
                                <tr key={transaction.id}>
                                    <td>{transaction.date}</td>
                                    <td>{transaction.description}</td>
                                    <td>{transaction.category}</td>
                                    <td>{transaction.amount}</td>
                                    <td className="deletebutton"><DeleteTransactionButton transactionid={transaction.id} removeTransaction={removeTransaction} /></td>
                                </tr>
                            )
                        }
                    )
                }
                </tbody>
            </table>
        </div>
    )
}

export default Transactions
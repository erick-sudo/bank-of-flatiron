import React from "react";

function Transactions({transactions}) {
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
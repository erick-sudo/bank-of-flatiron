import React from "react";

function DeleteTransactionButton({transactionid, removeTransaction}) {
    function deleteTransaction() {
        removeTransaction(transactionid)
    }
  return (
    <span onClick={deleteTransaction} className="delete-button">X</span>
  )  
}

export default DeleteTransactionButton
import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

function TransactionList() {
    const {transactions, deleteItem} = useContext(GlobalContext);
    return (
        <>
        <h3>History</h3>
        <ul className="list">
            {transactions.map(transaction =>(
                <li className={transaction.amount <0 ? "plus" : "minus"} key={transaction.id}>
                {transaction.text} <span>
            {transaction.amount <0 ? "-$" : "+$"}{Math.abs(transaction.amount)}</span>
            <button onClick={() => deleteItem(transaction.id)} className="delete-btn">x</button>
                </li>
            ))}
            
        </ul>

        </>
    )
}

export default TransactionList

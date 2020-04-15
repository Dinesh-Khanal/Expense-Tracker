import React, {useState, createContext} from 'react';
import { v1 as uuid } from 'uuid';

export const GlobalContext = createContext();

export default function GlobalProvider(props) {
    const [transactions, setTransactions] = useState([]);
    const deleteItem = (id) =>{
        const newTransactions = transactions.filter(transaction => transaction.id !== id);
        setTransactions(newTransactions);
    };
    const addItem = (txt, amt) =>{
        let newTransactions = [...transactions,{id: uuid(), text: txt, amount: +amt}];
        setTransactions(newTransactions);
    }
    return (
        <GlobalContext.Provider value={{
            transactions,
            setTransactions,
            deleteItem,
            addItem
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}

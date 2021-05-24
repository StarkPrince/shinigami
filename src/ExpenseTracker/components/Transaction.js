import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

function Transaction(props)
{
    const { deleteTransaction } = useContext(GlobalContext)
    const { text, amount } = props.transaction
    const sign = amount < 0 ? '-' : '+'
    return (
        <li className={sign === "-" ? "minus" : "plus"}>
            {text} <span>{sign}${Math.abs(amount)}</span>
            <button className="delete-btn"
                onClick={() => deleteTransaction(props.transaction.id)}></button>
        </li>
    )
}

export default Transaction

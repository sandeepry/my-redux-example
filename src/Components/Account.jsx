import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { increment,decrement,incrementByAmount,fetchUserById } from '../slices/accountSlice';

function Account() {

    const [value,setValue] = useState(0);

    const amount = useSelector(state=> state.account.amount);
    const points = useSelector(state=> state.bonus.points)
    const dispatch = useDispatch()


  return (
    <div className="card">
        <div className="Container">
            <h4>
                <b>Account Component</b>
            </h4>
            <h3>Amount:${amount}</h3>
            <h3>Bonus: ${points}</h3>
            <button onClick={()=> dispatch(increment())}>increment +</button>
            <button onClick={()=> dispatch(decrement())}>decrement -</button>
            <input type="text" onChange={(e)=>setValue(+e.target.value)} />
            <button onClick={()=> dispatch(incrementByAmount(value))}>increment By {value} +</button>
            <button onClick={()=> dispatch(fetchUserById(1))}>Get User</button>
        </div>
    </div>
  )
}

export default Account
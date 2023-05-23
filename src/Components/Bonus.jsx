import React from "react";
import { increment } from '../slices/bonusSlice';
import { useDispatch, useSelector } from "react-redux";

function Bonus() {

  const amount = useSelector(state=> state.account.amount);
  const points = useSelector(state=> state.bonus.points)
  const dispatch = useDispatch()

  return (
    <div className="card">
      <div className="Container">
        <h4>
          <b>Bonus Components</b>
        </h4>
        <h3>Total Amounts: {amount} </h3>
        <h3>Total Bonus: {points} </h3>
        <button onClick={()=>dispatch(increment())}>increment +</button>
      </div>
    </div>
  );
}

export default Bonus;

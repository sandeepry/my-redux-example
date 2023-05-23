import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment,incrementByAmount } from "../Reducers/rewads";

function Rewads() {

  const points = useSelector(state=> state.rewads.points)
  const dispatch = useDispatch()

  return (
    <div className="card">
      <div className="Container">
        <h4>
          <b>Rewads Components</b>
        </h4>
        <h3>Total Bonus: {points} </h3>
        <button onClick={()=>dispatch(increment())}>increment +</button>
        <button onClick={()=>dispatch(incrementByAmount(7))}>incrementByAmount +7</button>
      </div>
    </div>
  );
}

export default Rewads;
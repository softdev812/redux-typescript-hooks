import React from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { actionInc, actionDec } from "../store/action-creator/counter";
import "../style.css";

const Counter: React.FC = () => {
  const { value } = useTypedSelector(
    (state) => state.counter
  )

  const dispatch: any = useDispatch();

  return (
    <div>
      <div className="counter-panel">
        <div className="calc" onClick={() => dispatch(actionInc(value, 10))} >+</div>
        <h3 className="val">{value}</h3>
        <div className="calc" onClick={() => dispatch(actionDec(value, 5))}>-</div>
      </div>

    </div>
  )
}

export default Counter;
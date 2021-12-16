import React from "react";
import "./Counter.scss";
import Button from "../../components/Button/Button";
import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };
  const handleDecrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="counter__container">
      <h4 className="counter__name">Counter</h4>
      <span className="counter__result">{counter}</span>
      <div className="button__container">
        <div onClick={handleDecrement}>
          <Button className="Btn" buttonText="-" isSecondary={true} />
        </div>
        <div onClick={handleIncrement}>
          <Button className="Btn" buttonText="+" isSecondary={false} />
        </div>
      </div>
    </div>
  );
};

export default Counter;

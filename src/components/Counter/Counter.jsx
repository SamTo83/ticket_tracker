import React from 'react';
import './Counter.scss';
import Button from '../../components/Button/Button';
import { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0)

  const handleIncrement = () => {
    setCounter(counter +1)

  }
  const handleDecrement = () => {
    if ( counter > 0 ){
      setCounter(counter -1)
    }
  }

  return (
    <div className="counter-container">
      <h4 className="counter">Counter</h4>
      <span className="result">{counter}</span>
        <div className="button-container">
          <div onClick={handleDecrement} >
          <Button className="Btn" buttonText="-" isSecondary={true} />
          </div>
          <div onClick={handleIncrement}>
          <Button className="Btn" buttonText="+" isSecondary={false} />
          </div>
          
        </div>
    </div>
    
  )
};

export default Counter

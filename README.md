# Ticket Tracker

[You can check out my game by clicking on this link](https://samto83.github.io/ticket_tracker/)

![Ticket_Tracker l](https://github.com/SamTo83/Blackjack-game/blob/main/main.PNG)

## About
This is a simple Ticket Tracker I created with React and Sass. The Ticket Tracker allows the user to be able to increment and decrement the values of the counter. This project allows me to practice props, useState and components structure.

## The design  
### The tracker consist of: 
* A single page with layout of 10 employee's names and roles.
* All information cards name, role, counter and two buttons. 
* The plus and minus buttons can increase or decrease the number 0
* The code prevents it from going below 0.  

## The code 
1. The useState method allows me to handle the manipulation of the counter.


 ```const Counter = () => {
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
```

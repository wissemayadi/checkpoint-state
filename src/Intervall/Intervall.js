import React, { useState, useEffect } from "react";
import { Button, Badge } from "react-bootstrap";
import "./counter.css";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [timer, setTimer] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  // const chrono = () => {

  // };

  useEffect(() => {
    console.log("effect");

    const intervall = setInterval(() => {
      setTimer(timer + 1);
    }, 1000);

    return () => clearInterval(intervall);
  }, [timer]);

  // const reset = () => {
  //   setCounter(0);
  // };
  return (
    <div>
      <div className="counter">
        <Button variant="primary" onClick={decrement}>
          -
        </Button>
        <span>{counter}</span>

        <Button variant="primary" onClick={increment}>
          +
        </Button>

        <Button variant="danger" onClick={() => setCounter(0)}>
          Reset
        </Button>
      </div>

      <Badge variant="secondary" className="timer">
        Timer
      </Badge>

    
    </div>
  );
};

export default counter ;
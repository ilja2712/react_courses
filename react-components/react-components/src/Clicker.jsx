import React, {useState, useEffect} from 'react';

function Clicker() {
const [count, setCount] = useState(0);

const increment = () => {
  setCount(count + 1);
}

const decrement = () => {
  setCount(count - 1);
}

useEffect(() => {
    console.log("Hello from clicker", count);

    return () => console.log("Goodbay clicker!!!")
}, [count]);

  return (
    <div className="clicker">
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default Clicker;
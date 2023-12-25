import React, { useState } from 'react';
import { FaPlus, FaMinus } from "react-icons/fa";
import './counter.css';

const App = () => {
  const [count, setCount] = useState(0);
  const [showError, setShowError] = useState(null);

  const counterIncrement = () => {
    setCount(count + 1);
    // Clear the error message if it was previously displayed
    setShowError(null);
  }

  const counterDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
      // Clear the error message if it was previously displayed
      setShowError(null);
    } else {
      // Display the error message
      setShowError(<p>Counter cannot be less than 0!</p>);
    }
  }

  return (
    <div className='counter'>
      <h1>React Js Counter App</h1>
      <div className="counter_area">
        <button className='increment_btn' onClick={counterIncrement}><FaPlus size={40} color='green'/></button>
        <p>{count}</p>
        <button className='decrement_btn' onClick={counterDecrement}><FaMinus size={40} color='red'/></button>
      </div>
      <p className='warning_message'>{showError}</p>
    </div>
  );
}

export default App;

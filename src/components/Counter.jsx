import React, { useState, useEffect } from 'react';
import './Counter.css';

function Counter() {
  const [count, setCount] = useState(0);
  const [showMessage, setShowMessage] = useState(false);

  // When 'count' changes, this side effect runs
  useEffect(() => {
    // Only show message if count is not zero
    if (count !== 0) {
      setShowMessage(true);
      // Set a timer to hide the message after 3 seconds
      const timer = setTimeout(() => {
        setShowMessage(false);
      }, 1000);
      
      // Cleanup: If effect runs again before timer finishes, it will clear the previous timer
      return () => clearTimeout(timer);
    }
  }, [count]);  // Effect dependency: 'count'

  // Determine the color based on the counter's value
  const determineColor = () => {
    if (count < 0) return "red";
    if (count > 0) return "green";
    return "gray";
  };

  return (
    <div>
      <h1 style={{ color: determineColor() }}>Counter: {count}</h1>
      {showMessage && <p>The counter has changed!</p>}
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}

export default Counter;
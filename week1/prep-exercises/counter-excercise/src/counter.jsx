import React, { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);
  const feedback = count > 10 ? "It's higher than 10!" : "Keep counting...";

  return (
    <div class="counter">
      <Count count={count} />
      <Button setCount={setCount} />
      <p>{feedback}</p>
    </div>
  );
}

function Count({ count }) {
  return (
      <p class = "display-count">Count: {count}</p>
  );
}

function Button({ setCount }) {
  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
      <button class = "count-button" onClick={handleClick}>Add 1!</button>
  );
}
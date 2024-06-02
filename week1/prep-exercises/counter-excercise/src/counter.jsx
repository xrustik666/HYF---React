import React, { useState } from 'react';

function Count({ count }) {
  return (
      <p class = "display-count">Count: { count }</p>
  );
}

function Button({ setCount }) {
  const plusClick = () => {
    setCount(prevCount => prevCount + 1);
  };

  const minusClick = () => {
    setCount(prevCount => {
      if (prevCount <= 0) {
        return 0;
      }

      return prevCount - 1;
    });
  };

  return (
    <div>
      <button class = "plus-button" onClick={plusClick}>Plus 1</button>
      <button class = "minus-button" onClick={minusClick}>Minus 1</button>
    </div>
  );
}

export function Counter() {
  const [count, setCount] = useState(0);
  const feedback = count > 10 ? "It's higher than 10!" : "Keep counting...";

  return (
    <div class="counter">
      <Count count={ count } />
      <Button setCount={setCount} />
      <p>{feedback}</p>
    </div>
  );
}

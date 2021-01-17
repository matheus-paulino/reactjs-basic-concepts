import React, { useEffect, useState } from "react";

function UseEffectComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count !== 0) {
      document.title = "Counter: " + count;
    } else {
      document.title = "Click in increment";
    }
  }, [count]);

  function incrementAction() {
    setCount(count + 1);
  }

  function decrementAction() {
    if (count > 0) {
      setCount(count - 1);
    } 
  }

  return (
    <>
      <h1>Counter: {count}</h1>
      <button onClick={incrementAction}>Increment count</button>
      <button onClick={decrementAction}>Decrement count</button>
    </>
  );
}

export default UseEffectComponent;

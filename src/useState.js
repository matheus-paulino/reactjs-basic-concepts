import React, { useState } from "react";

function UseState() {
  let [counter, setCounter] = useState(0);

  const actionButton = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <h1>useState</h1>
      <div>{counter} vezes</div>
      <button onClick={actionButton}>
        Clique aqui para aumentar o contador
      </button>
    </>
  );
}

export default UseState;

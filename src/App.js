/* eslint-disable no-unused-vars */
import React from "react"
import Props from './Props'
import StyledComponents from "./StyledComponents";
import UseState from './useState'
import UseStateForInput from "./useStateForInput";
import ConditionalDisplay from './ConditionalDisplay'
import UseEffectComponent from "./useEffectComponent";
import TaskList from "./TaskList";

function App() {
  return (
    <>
      {/*<Props /> 
      <StyledComponents />
      <UseState />
      <UseStateForInput />
      <ConditionalDisplay />
      <UseEffectComponent  />
      */}
      <TaskList />
    </>
  );
}

export default App;
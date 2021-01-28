/* eslint-disable no-unused-vars */
import React from "react"
import Props from './Props'
import StyledComponents from "./StyledComponents";
import UseState from './useState'
import UseStateForInput from "./useStateForInput";
import ConditionalDisplay from './ConditionalDisplay'
import UseEffectComponent from "./useEffectComponent";
import TaskList from "./TaskList";
import ShowTaskList from "./ShowTaskList";

function App() {
  return (
    <>
      {/*<Props /> 
      <StyledComponents />
      <UseState />
      <UseStateForInput />
      <ConditionalDisplay />
      <UseEffectComponent  />
      <TaskList />
      */}
      <ShowTaskList />
    </>
  );
}

export default App;
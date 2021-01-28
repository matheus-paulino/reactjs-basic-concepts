import React, { useEffect, useState } from "react";
import InputList from "./components/InputList";

function ShowTaskList() {
  const [list, setList] = useState([]);

  useEffect(() => {
    setList([
      { id: 1, title: "Comprar o bolo", isDone: false },
      { id: 3, title: "Passear com o simba", isDone: true },
      { id: 4, title: "Comprar remédio", isDone: false },
    ]);
  }, []);

  function addAction(newItem) {
    let newList = [...list, { title: newItem, isDone: false }];
    setList(newList);
  }

  function handleToggleDone(index) {
    let newList = [...list];
    newList[index].isDone = !newList[index].isDone;

    setList(newList);
  }

  return (
    <>
      <h1>Task List</h1>
      <InputList defaultPlaceholder="Add new task..." onEnter={addAction} />
      <hr />
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item.isDone && <del>{item.title}</del>}
            {!item.isDone && item.title}
            <button onClick={() => handleToggleDone(index)}>
              {item.isDone ? "Desfazer" : "Fazer"}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ShowTaskList;

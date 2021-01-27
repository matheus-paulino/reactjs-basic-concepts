import React, { useState } from "react";
import SearchBox from "./components/SearchBox";

function TaskList() {
  const [searchText, setSearchText] = useState("");

  function handleSearchInput(InputText) {
    setSearchText(InputText);
  }

  return (
    <>
      <h1>Task List</h1>
      <SearchBox
        defaultPlaceholder="Search..."
        onChangeText={handleSearchInput}
      />
      <SearchBox defaultPlaceholder={searchText} />
      <hr />
      <p>Texto procurado: {searchText}</p>
    </>
  );
}

export default TaskList;

import React, { useState, useEffect } from "react";
import styled from "styled-components";

const InputText = styled.input`
  border: 2px solid #000;
  border-radius: 5px;
  padding: 15px;
  font-size: 17px;
  width: 300px;
`;

function SearchBox(props) {
  const [text, setText] = useState("");

  useEffect(() => {
    if (props.onChangeText) {
      props.onChangeText(text);
    }
  }, [props, text]);

  return (
    <InputText
      type="text"
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder={props.defaultPlaceholder ?? "Palavra-chave"}
    />
  );
}

export default SearchBox;

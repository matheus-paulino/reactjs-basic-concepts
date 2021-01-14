import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 15px;
`;

const Input = styled.input`
  width: 400px;
  height: 30px;
  font-size: 16px;
  padding: 10px;
`;

function UseStateForInput() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  const handleInputEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleInputPassword = (e) => {
    setPassword(e.target.value);
  };

  const handleButton = () => {
    alert(email + " - " + password);
  };

  return (
    <>
      <Container>
        <h1>useState for input</h1>
        <label for="email">E-mail</label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={handleInputEmail}
        />
        <label for="password">Password</label>
        <Input
          id="password"
          type="password"
          value={password}
          onChange={handleInputPassword}
        />
        <button onClick={handleButton}>
          Me mostre o que não deveria mostrar
        </button>
      </Container>
    </>
  );
}

export default UseStateForInput;

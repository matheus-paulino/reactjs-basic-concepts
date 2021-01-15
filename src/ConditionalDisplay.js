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
  let [isLogged, setIsLogged] = useState(false);

  const handleInputEmail = (e) => {
    setEmail(e.target.value);
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
        {/* {email.length > 0 && <p>{email.length}</p>} */}

        {/* {isLogged && <button>Sair</button>}
            {!isLogged && <button>Fazer login</button>} */}
        {isLogged ? <button>Sair</button> : <button>Fazer login</button>}
      </Container>
    </>
  );
}

export default UseStateForInput;

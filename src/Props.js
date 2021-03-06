import React from "react";

function Avatar(props) {
  return (
    <div>
      <img src={props.user.url} alt={props.user.name} />
      <br />
      <span>{props.user.name}</span>
    </div>
  );
}


function Props() {
  let user = {
    url: "https://www.google.com.br/google.jpg",
    name: "Matheus Paulino"
  };

  return (
    <>
      <Avatar
        user={user}
      />
    </>
  );
}

export default Props;
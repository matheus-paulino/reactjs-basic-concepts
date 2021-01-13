import React from "react"

/**
 * Podendo passar mais de uma prop
 */

function Welcome(props){
  return <h1>Olá {props.name}!</h1>
}

function Props() {
  return (
    <>
      <Welcome name="Matheus" />
      <Welcome name="Fulano"/>
    </>
  )
}

export default Props;
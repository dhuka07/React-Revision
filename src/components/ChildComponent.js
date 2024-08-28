import React from 'react'

export default function ChildComponent(props) {
  return (
    <div>
      {/* <button onClick={props.greetHandler}>Greet Parent</button> */}
      {/* Use arrow func sytex if you want to pass parameter  */}
      <button onClick={() => props.greetHandler('child')}>Greet Parent</button>
    </div>
  )
}

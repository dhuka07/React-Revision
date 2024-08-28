import React from 'react'

function FunctionClick() {

   function clickHandler() {
        console.log('clicked');
    }
  return (
    <div>
        {/*absence of parenthesis, if we add parenthesis it becomes function call but we want handler to be function not function call */}
      {/* if we keep parenthesis than clieked event will be already logges and this becomes worse in class components as its keeps on re-rendering   */}
      {/* <button onClick={clickHandler()}>Click</button> */}
      <button onClick={clickHandler}>Click</button>


      <p>* Note lesson here is event handler has to be function and not function call **()</p>
    </div>
  )
}

export default FunctionClick

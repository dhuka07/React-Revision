import React, { Component } from 'react'

class Counter extends Component {
    constructor(props){
        super(props)
        this.state = {
            counter: 0
        }
    }

    ChangeCounter(){
        // this.state.counter = this.state.counter + 1
        // console.log(this.state.counter)
            //  this.setState ({
            //     counter: this.state.counter + 1
                
            // }, () => {console.log('Callback value - ',this.state.counter)})

        this.setState((prevState, props) => ({
            counter: prevState.counter + 1
            
        }))
         console.log(this.state.counter)
         console.log('this is prop',this.props.counter)
    } 


    ResetCounter(){
        this.setState({
            counter: 0
        })
    }

    IncrementFive(){
        this.ChangeCounter() 
        this.ChangeCounter()
        this.ChangeCounter()
        this.ChangeCounter()
        this.ChangeCounter()
    }
  render() {
    return (
      <div>
        <h1>Counter - {this.state.counter}</h1>
        <button onClick={() => this.ChangeCounter()}>Increment Counter</button>
        <button onClick={() => this.ResetCounter()}>Reset</button>
        <button onClick={() => this.IncrementFive()}>Increment x 5</button>
      </div>
    )
  } 
}

export default Counter

import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

 class parentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         ParentName: "Parent"
      }
      this.greetParent = this.greetParent.bind(this)
    }

    greetParent(child){
        console.log(child)
        alert(`Hello ${this.state.ParentName} ${child}`)
    }
    
  render() {
    return (
      <div>
        {/* <button onClick={this.greetParent}>GreetButton</button> */}
      <ChildComponent greetHandler = {this.greetParent}/>
      </div>
    )
  }
}

export default parentComponent

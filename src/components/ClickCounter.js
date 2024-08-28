import React, { Component } from 'react'
import withCounter from './withCounter'
class ClickCounter extends Component {
    // constructor(props) {
    //   super(props)
    
    //   this.state = {
    //      count:0
    //   }
    // }
    // incrementCount = () => {
    //     this.setState((prevstate, props) => ({
    //         count: prevstate.count + 1
    //     }))
    //     console.log(this.count)
    // }
  render() {
   // const {incrementCount, count} = this.props
    return (
     
      <div>
        <button onClick={this.props.incrementCount}> {this.props.name} Clicked X times</button>
        <p>count -{this.props.count} </p>
      </div>
    )
  }
}

export default withCounter(ClickCounter, 5)

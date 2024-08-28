import React, { Component } from 'react'

export class HoverCounterTwo extends Component {
    // constructor(props) {
    //   super(props)
    
    //   this.state = {
    //      count:0
    //   }
    // }
    // incrementCount = () =>{
    //     this.setState(prevState => {
    //         return {count: prevState.count + 1}
    //     })
    // }
  render() {
    return (
      <div>
        <h2 onMouseOver={this.props.incrementCount}>Hover this many times {this.props.count}</h2>
      </div>
    )
  }
}

export default HoverCounterTwo

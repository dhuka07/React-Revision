import React, { Component } from 'react'
import withCounter from './withCounter'

 class HoverCounter extends Component {
    // constructor(props) {
    //     super(props)
      
    //     this.state = {
    //        count:0
    //     }
    //   }
    //   incrementCount = () => {
    //       this.setState((prevstate, props) => ({
    //           count: prevstate.count + 1
    //       }))
    //       console.log(this.count)
    //   }
    
  render() {
    //const {incrementCount, count} = this.props
    return (
      <div>
        <p>prop{this.props.name}</p>
        <h2 onMouseOver={this.props.incrementCount}> {this.props.name} Hovered times {this.props.count}</h2>
      </div>
    )
  }
}

export default withCounter(HoverCounter, 1)

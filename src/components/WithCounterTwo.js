import React, { Component } from 'react'

 class WithCounterTwo extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           count:0
        }
      }
      incrementCount = () =>{
          this.setState(prevState => {
              return {count: prevState.count + 1}
          })
      }
  render() {
    return (
      <div>
        {this.props.render(this.state.count, this.incrementCount)}
        {/* {this.props.children(this.state.count, this.incrementCount)} we can also do this and in App.js put render function as child element of component tag */}
      </div>
    )
  }
}

export default WithCounterTwo

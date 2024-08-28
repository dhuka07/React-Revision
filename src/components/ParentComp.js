import React, { Component } from 'react'
import RegularComponent from './RegularComponent'
//import PureComp from './PureComp'

 class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'pure component'
      }
    }

    componentDidMount(){
        setInterval(() => {
        this.setState({
            name:'pure component'
        })
    }, 2000)
    }
    
  render() {
    return (
      <div>
        Parent Component
        <RegularComponent name={this.props.name}/>
        {/* <PureComp name={this.props.name}/> */}
      </div>
    )
  }
}

export default ParentComp

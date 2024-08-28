import React, { Component } from 'react'
import LifecycleB from './LifecycleB'
 class LifecycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'saifali'
      }
      console.log('lifecycle A constructor')
    }

    static getDerivedStateFromProps(props,state){
        console.log('lifecycle A getDerivedStateFromProps')
        return null
    }

    componentDidMount (){
        console.log('lifecycle A componentDidMount')
    }

    shouldComponentUpdate(){
        console.log('lifecycle A shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('lifecycle A getSnapshotBeforeUpdate')
        return null
    }
    componentDidUpdate(){
        console.log('lifecycle A componentDidUpdate')
    }
    changeHandler = () =>{
        this.setState({
            name: 'dhuka'
        })
    } 
  render() {
    console.log('lifecycle A render')
    return (
        <div>
         <div> Lifecycle A </div>
         <button onClick={this.changeHandler}>Change State</button>
         <LifecycleB/>
        </div>
    )
  }
}

export default LifecycleA


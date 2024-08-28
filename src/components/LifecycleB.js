import React, { Component } from 'react'

 class LifecycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'saifali'
      }
      console.log('lifecycle B constructor')
    }

    static getDerivedStateFromProps(props,state){
        console.log('lifecycle B getDerivedStateFromProps')
        return null
    }

    componentDidMount (){
        console.log('lifecycle B componentDidMount')
    }
    shouldComponentUpdate(){
        console.log('lifecycle B shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('lifecycle B getSnapshotBeforeUpdate')
        return null
    }
    componentDidUpdate(){
        console.log('lifecycle B componentDidUpdate')
    }
  render() {
    console.log('lifecycle B render')
    return <div> Lifecycle B </div>
  }
}

export default LifecycleB


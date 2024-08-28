import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(){
        super()
        this.state = ({
             msg: 'before clicked'
         })
            
        //  binding in class constructor
       // this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler(){
    //     this.setState((prevState) => ({
    //         msg :  'After clicked'
           
    //     }))
    //     console.log('this.msg',this.prevState)      
    //}

    //without bind in constructor instead this function has been made as arrow funcs..
    clickHandler = () =>{
        this.setState ({
            msg: 'After clicked from Arrow fnc'
        })
    }

  render() {
    return (
      <div>
         <p>Click Event - {this.state.msg}</p>
        {/* <button onClick={() => this.clickHandler()}>Click</button> */}
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
        <button onClick={this.clickHandler}>Click</button>
       
      </div>
    )
  }
}

export default EventBind

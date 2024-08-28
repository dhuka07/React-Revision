import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:'',
         comments:'',
         topic:'React'
      }
    }
    HandleUserNameChange = event => {
        this.setState({ 
          username: event.target.value
         
        })
      //  const uname = event.target.value
       // console.log(`uname ${uname}`)
    }
    HandleCommentsChange = event => {
        this.setState({ 
          comments: event.target.value     
        })     
    }
    HandleTopicChange = event => {
        this.setState({ 
          topic: event.target.value     
        })     
    }
    HandleSubmit = event => {
    alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
    event.preventDefault()
    }
  render() {
    const {username, comments, topic} = this.state
    return (
      <form onSubmit={this.HandleSubmit}> 
        <div>
            <label>Username</label>
            <input 
            type='text'
            value={username}
            onChange={this.HandleUserNameChange}
            />
        </div>
        <div>
            <label>Comments</label>
            <textarea 
            type='text' 
            value={this.state.comments}
            onChange={this.HandleCommentsChange}/>
        </div>
        <div>
            <label>Topic</label>
            <select value={this.state.topic} onChange={this.HandleTopicChange}>
            <option value="React">React</option>
            <option value="angular">angular</option>
            <option value="vue">vue</option>
            </select>         
        </div>
        <button type='Submit'>Submit</button>
      </form>
    )
  }
}

export default Form

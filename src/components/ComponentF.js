import React, { Component } from 'react'
import { UserConsumer } from './userContext'

 class ComponentF extends Component {
  render() {
    return (
    <UserConsumer>
        { (username) => {
                return (
                <div>
                    Hello {username}
                <p>Here username 'saifali' is coming from great grand parent component without manuaaly passing it through every level</p>
                </div>
                ) 
            }
        }
    </UserConsumer>
    )
  }
}

export default ComponentF

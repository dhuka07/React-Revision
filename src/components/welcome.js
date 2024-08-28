import React, {Component} from "react";

class Welcome extends Component {
    render(){
        const {name, heroName} = this.props
       // const {state1, state1} = this.state
        return (
        <div>
            <h1>Class Component {this.props.name} a.k.a {this.props.heroName}</h1>
            <h2>Class Component {name} a.k.a {heroName}</h2>
            {this.props.children}
        </div>
        )
    }
}

export default Welcome
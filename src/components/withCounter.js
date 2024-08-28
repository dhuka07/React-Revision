import React from "react";

const withCounter = (WrapperComponent, incrementBy) => {
    class WithCounter extends React.Component{
        constructor(props) {
            super(props)
          
            this.state = {
               count:0
            }
          }
          incrementCount = () => {
              this.setState((prevstate, props) => ({
                  count: prevstate.count + incrementBy
              }))
              console.log(this.count)
          }
       
        render(){
            return (
                <>
                    <p>{this.props.name}</p>
                    <WrapperComponent 
                    count = {this.state.count} 
                    incrementCount = {this.incrementCount} 
                    {...this.props}
                    />
                </>

            )
        }
    }
    return WithCounter
}

export default withCounter
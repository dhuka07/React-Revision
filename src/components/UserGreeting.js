import React, { Component } from 'react'

 export class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedin:true
      }
    }
    
//   render() 
//   {
//         if (this.state.isLoggedin){
//         return (
//         <div>
//         <div>Welcome Saifali</div>
//         </div>
//         )
//         } 
//         else {
//             return  <div>Welcome Guest</div>            
//         }
//   }

// second approch 
// element variable approch

    // render()
    //     {
    //         let message
    //         if (this.state.isLoggedin){
    //             message = <div>Welcome Saifali</div>
    //         }else{
    //             message = <div>Welcome Guest</div>
    //         }
    //         return (
    //             <div>
    //                 {message}
    //             </div>
    //         )
    //     }

// third approch ternary operations approch 

    // render(){

    //     return(
    //         this.state.isLoggedin ?
    //          <div>Welcome Saifali</div> :
    //         <div>Welcome Guest</div>
    //     )
        
    // }


// fourth approch Short Circuit apporch // this is done when you have to return something or nothing 

render (){
    return this.state.isLoggedin && <div>Welcome Saifali</div>
}
}
// we will mostly use either 3rd or 4th apporch as those are the clean apporoch 
export default UserGreeting

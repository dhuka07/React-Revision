import React from 'react'

//function Greet(){
 //   return <h1>Hello Saifali</h1>
//}

const Greet = (props) => {
    const {name, heroName} = props
console.log(props.name)
return (
<div>
    <h1>Hello {props.name} a.k.a {props.heroName}</h1>
    
    <h2>Hello {name} a.k.a {heroName}</h2>
    {props.children}
</div>
)
}
export default Greet

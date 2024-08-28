import React from 'react'
import Person from './Person'

function NameList() {
    const names = ['Bruce', 'CLark', 'Diana', 'Bruce']
    const persons = [
        {
        id:1,
        name:'Bruce',
        age: 30,
        skill: 'react'       
        },
        {
        id:2,
        name:'Clark',
        age:27,
        skill:'vue'
        },
        {
        id:3,
        name:'Diana',
        age:27,
        skill:'Angular'
        }     
        
    ]
    //key prop is added in list element to get unique values of list 
    //**Keys are not accessible in child component */
    const personList = persons.map(person => ( <Person key={person.id} person = {person} />))
    // const personList = persons.map(person => <Person Person={Person} />)
    console.log('personlist', {personList})
    
    return (
     <div>
        {personList}
        <br></br> 
        <p>Indexing List elemeten instead of using Key</p>   
        <div>{names.map((names, index) => <h3 key={index}>{index}{names}</h3>)}</div>
    </div>
    )


//   return (
//     <div>
//         {/* <h3>{names[0]}</h3> */}
//         {/* <h3>{names[1]}</h3> */}
//         {/* <h3>{names[2]}</h3> */}
//         <div>{personList}</div>
//       {/* //{
//        // persons.map(name => <h2>{persons.name}</h2>)
//       //} */}
//     </div>
 // )
}

export default NameList
import React from 'react'

// Direct Destructure Function
const DestructureFunction = ({name, codeName, rank}) => {
    return (
        <div>
            <h1>Destructure-Function</h1>
            <p>{rank} - {codeName} is {name}</p>
        </div>
    )
}

// // Indirect Destructure Function
// const DestructureFunction = (props) => {
//     const {name, codeName, rank} = props
//     return (
//         <div>
//             <h1>DestructureFunction</h1>
//             <p>{rank} - {codeName} is {name}</p>
//         </div>
//     )
// }

export default DestructureFunction


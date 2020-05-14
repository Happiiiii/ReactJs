import React from 'react'

function FunctionalEventHandle() {
    
    function handleClick() {
        console.log("Button clicked using normal function")
    }

    const handleEvent = () => {
        console.log("Button clicked using ES6 () => {}")
    }

    return (
        <div>
            <h1>Functional-EventHandle</h1>
            <button onClick={handleClick}>Normal-Function</button>
            <button onClick={handleEvent}>Arro-Function</button>
        </div>
    )
}

export default FunctionalEventHandle

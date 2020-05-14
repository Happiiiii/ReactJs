import React from 'react'

function ChildFunComp(props) {
    return (
        <div>
            <button onClick={props.greetHandler}>Greet Parents</button>
            <button onClick={() => props.greetSurya('Juvia')}>Parameter_child-parent</button>
        </div>
    )
}

export default ChildFunComp

import React from 'react';

const functionalProps = (props) => {
    return(
        <div>
            <p> {props.rank} - {props.codeName} is {props.name}</p>
            {props.children}
        </div>
    )
}

export default functionalProps;
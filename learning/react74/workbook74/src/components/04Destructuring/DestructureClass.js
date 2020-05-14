import React, { Component } from 'react'

class DestructureClass extends Component {
    render() {
        const {name, codeName, rank} =this.props
        return (
            <div>
                <h1>Destructure-Class</h1>
                <p>{rank} - {codeName} is {name}</p>
            </div>
        )
    }
}

export default DestructureClass

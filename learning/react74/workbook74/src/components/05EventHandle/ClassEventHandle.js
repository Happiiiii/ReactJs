import React, { Component } from 'react'

class ClassEventHandle extends Component {
    
    handleClick(){
        console.log("Button clicked using normal function")
    }

    handleEvent = () => {
        console.log("Button clicked using ES6 () => {}")
    } 



    render() {
        return (
            <div>
                <h1>Class-EvenHandle</h1>
                <button onClick={this.handleClick}>Normal-Function</button>
                <button onClick={this.handleEvent}>Arrow-Function</button>
            </div>
        )
    }
}

export default ClassEventHandle

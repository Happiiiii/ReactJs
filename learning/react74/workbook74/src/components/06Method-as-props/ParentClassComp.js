import React, { Component } from 'react'
import ChildFunComp from './ChildFunComp'

export class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             parentName : 'Surya'
        }
        // Bind the greetParent function to the 'this' keyword
        this.greetParent = this.greetParent.bind(this)
        this.greetSurya = this.greetSurya.bind(this)
    }

    greetParent(){
        alert(`Hello ${this.state.parentName}` )
    }

    greetSurya(childName){
        alert(`${childName} Father is ${this.state.parentName}` )
    }
    
    render() {
        return (
            <div>
                <h1>Method-as-props</h1>
                <h2>parent class Component -to- child Functional component</h2>
                <p>Bind the greetParent function from parent to child using 'bind(this)'' keyword</p>
                <ChildFunComp greetHandler={this.greetParent} greetSurya={this.greetSurya} />
            </div>
        )
    }
}

export default ParentComp

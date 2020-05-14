import React, { Component } from 'react'

class counterState extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }

    incrementOne(){
        // this.setState (
        //     {
        //     count: this.state.count + 1
        //     },
        //     () => console.log("callback value " + this.state.count)
        // )
        // console.log(this.state.count)
        
        this.setState(prevState => ({
            count : prevState.count + 1 
            })
        )
    }


    incrementFive(){
        this.incrementOne()
        this.incrementOne()
        this.incrementOne()
        this.incrementOne()
        this.incrementOne() 
    }

    
    render() {
        return (
            <div>
                <h1>Count - {this.state.count}</h1>
                <button onClick={ () => this.incrementOne() }>Increment by 1</button>
                <button onClick={ () => this.incrementFive() }>Increment by 5</button>
            </div>
        )
    }
}

export default counterState


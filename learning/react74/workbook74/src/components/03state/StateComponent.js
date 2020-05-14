import React, { Component } from 'react';

class stateComponent extends Component {

    constructor() {
        super()
        this.state = {
            message : 'State has been set'
        }
    }

    handleClick(){
        this.setState({
            message: 'State has been Updated'
        })
    }

     render() {
         return (
             <div>
                 <h1>{this.state.message}</h1>
                 <button onClick={() => this.handleClick()}>Update</button>
             </div>
         )
     }
}

export default stateComponent;
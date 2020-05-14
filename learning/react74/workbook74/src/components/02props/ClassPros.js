import React, { Component } from 'react';

class classProps extends Component {
    render() {
        return (
            <div>
                <p>{this.props.rank} -{this.props.codeName} is {this.props.name}</p>
                {this.props.children}
            </div>
        )
    }
}

export default classProps;
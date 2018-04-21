import React, { Component } from 'react';

class InputCoo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <p>Point {this.props.point}</p>
                <label>X</label>
                <input type="text" />
                <label>Y</label>
                <input type="text" />
            </div>
        );
    }
}

export default InputCoo;
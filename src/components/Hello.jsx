import React, { Component } from 'react'

export default class Hello extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);
        return (
            <div>
                Hello组件
            </div>
        )
    }
}

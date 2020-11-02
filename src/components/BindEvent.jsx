import React, { Component } from 'react'

export default class BindEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: "这里的之前的内容",
            msg: "这里可能是文本框里的字",
            value: ''
        }
    }

    logger = () => {
        this.setState({
            date: "改变了",
            msg: "点了按钮"
        })
    }

    onChange = (e) => {
        // console.log(e);
        if (e.target.value === 'abc') {
            alert('!')
        }
        this.setState({
            value: e.target.value
        });
    };

    render() {
        return (
            <div>
                <button onClick={() => this.logger()}>按钮</button><br />
                {this.state.date}<br />
                <input
                    type="text"
                    value={this.state.value}
                    placeholder="placeholder"
                    style={{ width: '250px' }}
                    // readOnly
                    onChange={this.onChange}
                />
            </div>
        )
    }
}

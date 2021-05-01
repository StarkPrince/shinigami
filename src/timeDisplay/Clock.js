import React, { Component } from 'react'

export class Clock extends Component
{
    state = { time: '' }
    componentDidMount()
    {
        setInterval(() =>
        {
            this.setState({ time: new Date().toLocaleTimeString() })
        }, 1000)
    }
    render()
    {
        return (
            <div className="container">
                <h1>India: {this.state.time}</h1>
            </div>
        )
    }
}

export default Clock

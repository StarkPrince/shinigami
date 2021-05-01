import React, { Component } from 'react'
import Seasons from "./Seasons"
import Spinner from "./Spinner"


export class SeasonDisplay extends Component
{
    state = {
        lat: null,
        long: null,
        errorMsg: ''
    }

    componentDidMount()
    {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude, long: position.coords.longitude }),
            err => this.setState({ errorMsg: err.message })
        );
    }
    renderText()
    {
        if (!this.state.lat) {
            return <div>Error: {this.state.errorMsg}</div>
        }
        else if (this.state.lat) {
            return <Seasons lat={this.state.lat} long={this.state.long} />
        }
        else {
            return <Spinner message="Please accept location request." />
        }
    }
    render()
    {
        return <div>
            {this.renderText()}
        </div>
    }
}

export default SeasonDisplay
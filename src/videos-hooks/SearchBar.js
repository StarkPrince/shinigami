import React, { Component } from 'react'

export class SearchBar extends Component
{
    state = { term: '' }
    onInputChange = (event) => this.setState({ term: event.target.value })

    onFormSubmit = event =>
    {
        event.preventDefault();
        this.props.onFormSubmit(this.state.term)
    }
    render()
    {
        return (
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label htmlFor="vids">Videos</label>
                        <input type="text" id="vids" value={this.state.value} onChange={this.onInputChange} />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar

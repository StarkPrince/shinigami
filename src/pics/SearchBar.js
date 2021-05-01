import React, { Component } from 'react'

export class SearchBar extends Component
{
    state = { term: "" }

    onFormSubmit = (event) =>
    {
        event.preventDefault()
        this.props.onSubmit(this.state.term)
    }

    render()
    {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label htmlFor="searchBox">Image Search</label>
                        <input type="text" id="searchBox"
                            onClick={this.onInputClick}
                            value={this.state.term}
                            onChange={e => this.setState({ term: e.target.value })} />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar


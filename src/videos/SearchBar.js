import React, { useState } from 'react'

const SearchBar = ({ onFormSubmit }) =>
{
    const [term, setTerm] = useState('');

    const onSubmit = event =>
    {
        event.preventDefault();
        onFormSubmit(term)
    }

    return (
        <div className="search-bar ui segment">
            <form className="ui form" onSubmit={onSubmit}>
                <div className="field">
                    <label htmlFor="vids">Videos</label>
                    <input type="text" id="vids" value={term} onChange={(e) => { setTerm(e.target.value) }} />
                </div>
            </form>
        </div>
    )
}

export default SearchBar

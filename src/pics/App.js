import SearchBar from "./SearchBar"
import React, { Component } from 'react'
import unsplash from "../api/unsplash"
import ImageList from "./ImageList"

export class App extends Component
{
    state = { images: [] }
    onSearchSubmit = async (term) =>
    {
        const response = await unsplash.get('search/photos', {
            params: {
                query: term,
                page: 1, per_page: 30
            }
        });
        this.setState({ images: response.data.results })
    }
    render()
    {
        return <div className="ui container" style={{ marginTop: '10px' }}>
            <SearchBar onSubmit={this.onSearchSubmit} />
            <ImageList images={this.state.images} />
        </div>
    }
}

export default App

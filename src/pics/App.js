import SearchBar from "./SearchBar"
import React, { Component } from 'react'
import axios from "axios"

export class App extends Component
{
    state = { images: [] }
    onSearchSubmit = async (term) =>
    {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: {
                query: term
            },
            headers: {
                Authorization: 'Client-ID obQObIm8rUL_yG1FYUQZB2ghCSrw1uz8SZ5sOlY-vYg'
            }
        });
        this.setState({ images: response.data.results })
    }
    render()
    {
        return <div className="ui container" style={{ marginTop: '10px' }}>
            <SearchBar onSubmit={this.onSearchSubmit} />
            Found {this.state.images.length} images
        </div>
    }
}

export default App

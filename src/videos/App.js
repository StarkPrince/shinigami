import React, { Component } from 'react'
import SearchBar from './SearchBar'
import youtube from "../api/youtube"
import VideoList from "./VideoList"

export class App extends Component
{
    state = { videos: [] }
    onTermSubmit = async (term) =>
    {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        })
        this.setState({ videos: response.data.items })
    }
    render()
    {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <VideoList videos={this.state.videos} />
            </div>
        )
    }
}

export default App

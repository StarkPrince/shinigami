import React, { Component } from 'react'
import SearchBar from './SearchBar'
import youtube from "../api/youtube"
import VideoList from "./VideoList"
import VideoDetail from "./VideoDetail"

export class App extends Component
{

    state = { videos: [], selectedVideo: null }

    onTermSubmit = async (term) =>
    {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        })
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        })
    }

    onVideoSelect = video =>
    {
        this.setState({ selectedVideo: video })
    }
    render()
    {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div>
                            <VideoDetail video={this.state.selectedVideo} />
                            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App

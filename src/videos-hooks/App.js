import React, { useState, useEffect } from 'react'
import SearchBar from './SearchBar'
import youtube from "../api/youtube"
import VideoList from "./VideoList"
import VideoDetail from "./VideoDetail"
import useVideos from "../hooks/useVideos"

function App()
{
    const [videos, setVideos] = useVideos('buildings')
    const [selectedVideo, setSelectedVideo] = useState(null)

    useEffect(() => { setSelectedVideo(videos[0]) }, [videos])

    return (
        <div className="ui container">
            <SearchBar onFormSubmit={setVideos} />
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideo} />
                    </div>
                    <div className="five wide column">
                        <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App

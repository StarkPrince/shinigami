import React from 'react'
import VideoItem from './VideoItem'

const VideoList = ({ videos, onVideoSelect }) =>
{
    return (
        <div className="ui relaxed divided list">
            {videos.map(vid => <VideoItem video={vid} onVideoSelect={onVideoSelect} key={vid.id.videoId} />)}
        </div>
    )
}

export default VideoList

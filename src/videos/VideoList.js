import React from 'react'
import VideoItem from './VideoItem'

const VideoList = ({ videos }) =>
{
    return (
        <div>
            {videos.map(vid => <VideoItem video={vid} />)}
        </div>
    )
}

export default VideoList

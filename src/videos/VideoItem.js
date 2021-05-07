import React from 'react'
import "./VideoItem.css"

const VideoItem = ({ video, onVideoSelect }) =>
{
    return (
        <div onClick={() => onVideoSelect(video)} className="video-item item" key={video.id.videoId}>
            <img src={video.snippet.thumbnails.medium.url} className="ui image" alt={video.snippet.title} />
            <div className="content" >
                <div className="header" style={{ color: '#0096FF' }}>{video.snippet.title}</div>
            </div>
        </div>
    )
}

export default VideoItem

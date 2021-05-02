import React from 'react'

const VideoItem = ({ video }) =>
{
    return (
        <div className="ui container">
            <img src={video.snippet.thumbnails.medium.url} />
            {video.snippet.title}
        </div>
    )
}

export default VideoItem

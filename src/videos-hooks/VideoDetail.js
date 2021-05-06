import React from 'react'

function VideoDetail({ video })
{
    if (!video) {
        return <div>{null}</div>
    }
    const vidSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    return (
        <div>
            <div className="ui embed">
                <iframe src={vidSrc} title="video player" />
            </div>
            <div className="ui segment" key={video.id.videoId}>
                <h4 className="ui header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    )
}

export default VideoDetail

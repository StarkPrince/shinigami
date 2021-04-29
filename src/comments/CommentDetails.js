import React from "react"
import faker from "faker"


function CommentDetails()
{
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={faker.internet.avatar()} />
            </a>
            <div className="content">
                <a href="/" className="author">
                    <p>{faker.internet.userName()}</p>
                </a>
                <div className="metadata">
                    <span className="date">{Math.floor(Math.random() * 10) + " days ago"}</span>
                </div>
                <div className="text">Nice, blog Post!</div>
            </div>
        </div>
    )
}

export default CommentDetails

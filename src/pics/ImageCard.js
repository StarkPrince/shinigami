import React, { Component } from 'react'

export class ImageCard extends Component
{
    render()
    {
        return (
            <div>
                <img alt={this.props.image.description}
                    src={this.props.image.urls.regular} />
            </div>
        )
    }
}

export default ImageCard;
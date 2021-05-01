import React from "react"
import "./ImageList.css"

const ImageList = props =>
{
    const images = props.images.map(({ description, id, urls }) => <img key={id} src={urls.small} alt={description} />)
    return <div className="image-list">{images}</div>
}

export default ImageList;
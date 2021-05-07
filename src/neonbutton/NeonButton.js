import React from 'react'
// import './assets/css/fonts.css';
import "./NeonButton.css"

function NeonButton({ link, location })
{
    return (
        <div>
            <a href={link} className="neon-button">{location}</a>
        </div>
    )
}

export default NeonButton

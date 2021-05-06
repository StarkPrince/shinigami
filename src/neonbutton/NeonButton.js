import React from 'react'
// import './assets/css/fonts.css';
import "./NeonButton.css"

function NeonButton({ link, location })
{
    return (
        <div>
            <a href={link} class="neon-button">{location}</a>
        </div>
    )
}

export default NeonButton

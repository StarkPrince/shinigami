import React from 'react'
import Link from "./Link"
import NeonButton from "../neonbutton/NeonButton"

function Header()
{
    return (
        <div className="ui secondary pointing menu">
            <Link href="/search" className="item">Wikipedia</Link>
            <Link href="/colorchanger" className="item">Color Changer</Link>
            <Link href="/translate" className="item">Translate</Link>
            <Link href="/video" className="item">Video</Link>
            <Link href="/pics" className="item">Pics</Link>
            <Link href="/weather" className="item">Weather</Link>
        </div>
    )
}

export default Header

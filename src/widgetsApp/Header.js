import React from 'react'
import Link from "./Link"

function Header()
{
    return (
        <div className="ui secondary pointing menu">
            <Link href="/" className="item">Accordion</Link>
            <Link href="/search" className="item">Wikipedia</Link>
            <Link href="/colorchanger" className="item">Color Changer</Link>
            <Link href="/translate" className="item">Translate</Link>
        </div>
    )
}

export default Header

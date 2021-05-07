import React, { useState } from 'react'
import Accordion from "./Accordion"
import Search from './Search'
import ColorChanger from "./ColorChanger"
import Translate from "./Translate"
import "./App.css"
import Route from "./Route"
import Header from './Header'
import Video from "../videos/App"
import Pics from "../pics/App"
import NeonButton from "../neonbutton/NeonButton"


function App()
{

    return (
        <div className="ui container">
            <div className="ui container">
                <div className="ui secondary pointing menu">
                    <NeonButton link="" location="Accordian" />
                </div>
                <Accordion />
            </div>
            <div className="ui container">
                <div className="ui secondary pointing menu">
                    <NeonButton link="" location="Video" />
                </div>
                <Video />
            </div>
            <div className="ui container">
                <div className="ui secondary pointing menu">
                    <NeonButton link="" location="Pics" />
                </div>
                <Pics />
            </div>
            <div className="ui container">
                <div className="ui secondary pointing menu">
                    <NeonButton link="" location="ColorChanger" />
                </div>
                <ColorChanger />
            </div>
            <div className="ui container">
                <div className="ui secondary pointing menu">
                    <NeonButton link="" location="Search" />
                </div>
                <Search />
            </div>
            <div className="ui container">
                <div className="ui secondary pointing menu">
                    <NeonButton link="" location="Translate" />
                </div>
                <Translate />
            </div>
        </div>
    )
}

export default App

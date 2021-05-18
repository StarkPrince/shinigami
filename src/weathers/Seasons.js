import React from 'react'
import summer from "./summer.png"
import winter from "./winter.png"
import "./Seasons.css"
import Clock from './Clock'

const seasonConfig = {
    summer: {
        text: "Let's hit the beach",
        iconName: "sun",
        pic: "summer"
    },
    winter: {
        text: "Burr, its chilly",
        iconName: "snowflake",
        pic: "winter"
    }
}
const getSeason = (lat, month) =>
{
    if (month > 2 && month < 9) {
        return lat > 0 ? "summer" : "winter"
    }
    else {
        return lat < 0 ? "summer" : "winter"
    }
}
function Seasons(props)
{

    var sea = getSeason(props.lat, new Date().getMonth());
    const { text, iconName } = seasonConfig[sea];
    return (
        <div className={`seasonDisplay ${sea}`} >
            <i className={`${iconName} icon-left massive icon`} />
            { sea === "summer" ? <img src={summer} alt="summer" /> : <img src={winter} alt="winter" />}
            <div>
                <h1> {text}</h1 >
                <Clock />
            </div>
            <i className={`${iconName} icon-right massive icon`} />
        </div >
    )
}

export default Seasons

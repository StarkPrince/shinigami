import React from "react"
import ReactDOM from "react-dom"
import SeasonDisplay from "./weathers/SeasonDisplay"

const App = () =>
{
    return (
        <div>
            <SeasonDisplay />
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector("#root"))

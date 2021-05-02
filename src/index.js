import React from "react"
import ReactDOM from "react-dom"
import App1 from "./videos/App"

const App = () =>
{
    return <div>
        <App1 />
    </div>
}

ReactDOM.render(<App />, document.querySelector("#root"))

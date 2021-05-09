import React from "react"
import ReactDOM from "react-dom"
import App1 from "./widgetsApp/App"

const App = () =>
{
    return <div>
        <App1 />
    </div>
}

ReactDOM.render(<App />, document.querySelector("#root"))

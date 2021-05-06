import React, { useState } from 'react'
import Accordion from "./Accordion"
import Search from './Search'
import Dropdown from "./Dropdown"
import ColorChanger from "./ColorChanger"
import Translate from "./Translate"
import "./App.css"
import Route from "./Route"
import Header from './Header'
import Video from "../videos/App"
import Pics from "../pics/App"
import Weather from "../weathers/App"

// eslint-disable-next-line
const items = [{
    title: 'What is React?',
    content: 'React is a front end javascript framework.'
}, {
    title: 'Why use React?',
    content: 'React is famous among Engineers.'
}, {
    title: 'How to use React?',
    content: 'You can use React by creating components.'
}, {
    title: 'Is it worth learning react in 2020?',
    content: 'ReactJS is very easy to learn and more focused than some other JavaScript framework.'
}, {
    title: 'How good is react JS?',
    content: 'To sum this up: Reactjs shines in building dynamic and engaging web interfaces and triumphs over other javascript frameworks (such as Angular, Ember). '
}]

const url = window.location.pathname


function App()
{

    return (
        <div>
            <Header />
            <Route path="/"> <Accordion items={items} /> </Route>
            <Route path="/search"> <Search /> </Route>
            <Route path="/translate"> <Translate /> </Route>
            <Route path="/video"> <Video /> </Route>
            <Route path="/pics"> <Pics /> </Route>
            <Route path="/weather"> <Weather /> </Route>
        </div>
    )
}

export default App

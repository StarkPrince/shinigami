import React, { useState } from 'react'
import Accordion from "./Accordion"
import Search from './Search'
import Dropdown from "./Dropdown"
import ColorChanger from "./ColorChanger"
import Translate from "./Translate"
import "./App.css"

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
            {url === "/" ? <Accordion items={items} /> : null}
            {url === "/search" ? <Search /> : null}
            {url === "/colorchanger" ? <ColorChanger /> : null}
            {url === "/translate" ? <Translate /> : null}
        </div>
    )
}

export default App

import React, { useState } from 'react'
import Accordion from "./Accordion"
import Search from './Search'
import Dropdown from "./Dropdown"

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

const options = [{
    label: 'Blood Red',
    value: 'red'
},
{
    label: 'Grassy Green',
    value: 'green'
}, {
    label: 'A shade of Blue',
    value: 'blue'
}]
function App()
{
    const [selected, setSelected] = useState(options[0])
    const [showDropdown, setShowDropdown] = useState(true)
    return (
        <div>
            {/* <Accordion items={items} /> */}
            {/* <Search /> */}
            <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
            {showDropdown ?
                <Dropdown selected={selected} onSelectedChange={setSelected} options={options} /> : null}
        </div>
    )
}

export default App

import React, { useState } from 'react'
import Dropdown from "./Dropdown"

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
}, {
    label: 'IndianRed',
    value: '#CD5C5C'
}, {
    label: 'Salmon',
    value: '#FA8072'
}, {
    label: 'Olive',
    value: '#808000'
}, {
    label: 'Lime',
    value: '#00FF00'
}, {
    label: 'Fuchsia',
    value: '#FF00FF'
}]

function ColorChanger()
{
    const [selected, setSelected] = useState(options[0])

    return (
        <div>
            < Dropdown selected={selected} onSelectedChange={setSelected} options={options} label="Color" />
            <div className="sampleText" style={{ color: selected.value }}>
                Real Shit!
            </div>
        </div>
    )
}

export default ColorChanger

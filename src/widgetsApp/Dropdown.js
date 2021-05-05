import React, { useState, useEffect, useRef } from 'react'

function Dropdown({ options, selected, onSelectedChange })
{
    const [open, setOpen] = useState(false);
    const ref = useRef();

    useEffect(() =>
    {
        const onBodyClick = event =>
        {
            console.log('i M present')
            if (ref.current && ref.current.contains(event.target)) {
                return;
            }
            setOpen(false);
        }

        document.body.addEventListener('click', onBodyClick)
        return (() =>
        {
            document.body.removeEventListener('click', onBodyClick)
        })
    })

    const renderedOptions = options.map((option) =>
    (option.value === selected.value ? null :
        <option value={option.value} key={option.value} className="item" onClick={() => { onSelectedChange(option); }}>
            {option.label}
        </option>))

    return (
        <div ref={ref} className="ui form container">
            <div className="field">
                <label className="label">Select a Color</label>
                <div onClick={() => { setOpen(!open); }}
                    className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
                    <i className="dropdown icon" />
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dropdown

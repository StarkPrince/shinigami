import React, { useState } from 'react'

function Dropdown({ options, selected, onSelectedChange })
{
    const [open, setOpen] = useState(false);
    const renderedOptions = options.map((option) => (option.value === selected.value ? null :
        <option value={option.value} key={option.value} className="item" onClick={() => onSelectedChange(option)}>
            {option.label}
        </option>))

    return (
        <div className="ui form container">
            <div className="field">
                <label className="label">Select a Color</label>
                <div onClick={() => setOpen(!open)}
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

import React, { useState, useEffect } from "react"
import Convert from "./Convert"
import Dropdown from "./Dropdown"

const options = [{
    label: 'Afrikaans', value: 'af'
}, {
    label: 'Arabic', value: 'ar'
}, {
    label: 'Hindi',
    value: 'hi'
}]



const Translate = () =>
{
    const [language, setLanguage] = useState(options[0])
    const [text, setText] = useState("")
    const [debouncedText, setDebouncedText] = useState(text);

    useEffect(() =>
    {
        const timeoutId = setTimeout(() => setDebouncedText(text), 500)

        return () => clearTimeout(timeoutId)

    }, [text])

    return (<div>
        <div className="ui form container">
            <div className="field">
                <label>Enter Text</label>
                <input value={text} onChange={(e) => setText(e.target.value)} type="text" />
            </div>
        </div>
        <Dropdown options={options} selected={language} onSelectedChange={setLanguage} label="Language" />
        <Convert language={language} text={debouncedText} />
    </div>);
}

export default Translate;
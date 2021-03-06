import axios from "axios"
import React, { useState, useEffect } from "react"

const Convert = ({ language, text }) =>
{
    const [translated, setTranslated] = useState("prince")
    useEffect(() =>
    {
        const doTranslation = async () =>
        {
            const { data } = await axios.post("https://translation.googleapis.com/language/translate/v2", {}, {
                params: {
                    q: text,
                    target: language.value,
                    key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                }
            });
            setTranslated(data.data.translations[0].translatedText)
        }
        doTranslation();
    }, [language, text])
    return (< div className="ui container translatedText">
        <h1 className="ui header" style={{ color: '#0096FF', margin: '1em' }}>{translated}</h1>
    </div >)
}

export default Convert;
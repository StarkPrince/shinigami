import React, { useState } from 'react'

function Accordion({ items })
{
    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClick = (index) => setActiveIndex(index)

    const renderedItem = items.map((item, index) =>
    {
        const active = index === activeIndex ? 'active' : '';

        return (<React.Fragment key={item.title}>
            <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
                <i className="dropdown icon" />
                {item.title}
            </div>
            <div className={`content ${active}`}>
                <p>{item.content}</p>
            </div>
        </React.Fragment >)
    })
    return (
        <div className="ui styled accordion container">
            {renderedItem}
        </div>
    )
}

export default Accordion

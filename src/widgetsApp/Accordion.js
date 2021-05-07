import React, { useState } from 'react'

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

function Accordion()
{
    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClick = (index) => setActiveIndex(index)

    const renderedItem = items.map((item, index) =>
    {
        const active = index === activeIndex ? 'active' : '';

        return (<React.Fragment key={item.title}>
            <div className={`title ${active}`} onClick={() => onTitleClick(index)} style={{ color: '#0096FF' }}>
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

import React from 'react'

export default (props) => {
    // console.log(props)
    return (
    <div 
        className={props.style}
    >
        {props.items.map((item) => <button className="menuItem" onClick={() => props.click(item.comp)}>{item.name}</button>)}
    </div>)
}
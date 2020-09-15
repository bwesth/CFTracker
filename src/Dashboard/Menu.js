import React from 'react'

export default (props) => <div className="menu">
    {props.items.map((item) => <button className="menuItem" onClick={() => props.click(item.comp)}>{item.name}</button>)}
</div>
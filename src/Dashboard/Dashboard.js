import React, { useState } from 'react'
import './dashboard.css'
import Menu from './Menu'
import Main from './Main'
import Pledges from './Pledges'
import News from './News'
import Suggestions from './Suggestions'

export default () => {
    const menuItems = [
        {name: "Main", comp: <Main />},
        {name: "Pledges", comp: <Pledges />},
        {name: "News", comp: <News />},
        {name: "Suggestions", comp: <Suggestions />}
    ], 
    [displayItem,setDisplayItem] = useState(menuItems[0].comp)


    return <div className="dashboard">
        <div className="headliner">
            <p className="username">Mette</p>
            <h1>This is the Dashboard!</h1>
        </div>
        <div className="content">
        {displayItem}
        </div>
        <Menu click={setDisplayItem} items={menuItems} />
    </div>
}
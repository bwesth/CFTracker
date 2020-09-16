import React, { useState, useContext, useEffect } from 'react'
import './dashboard.css'
import Menu from './Menu'
import Main from './Main'
import Pledges from './Pledges'
import News from './News'
import Suggestions from './Suggestions'
import Settings from './Settings/Settings'
import { UserContext } from '../Main/UserContext'

export default () => {
    const [menuPlacement, setMenuPlacement] = useContext(UserContext).menuPlacement,
    menuItems = [
        {name: "Main", comp: <Main />},
        {name: "Pledges", comp: <Pledges />},
        {name: "News", comp: <News />},
        {name: "Suggestions", comp: <Suggestions />},
        {name: "Options", comp: <Settings setMenuPlacement={setMenuPlacement} />}
    ], 
    [displayItem,setDisplayItem] = useState(menuItems[0].comp)

    useEffect(() => {
        setMenuPlacement(menuStyleBottom)
    },[])

    const menuStyleBottom = {
            display: "flex",
            flexDirection: "row",
            height: "10%",
    }

    return <div className="dashboard">
        <div className="headliner">
            <p className="username">Mette</p>
            <h1>This is the Dashboard!</h1>
        </div>
        <div className="content">
        {displayItem}
        </div>
        <Menu style={menuPlacement} click={setDisplayItem} items={menuItems} />
    </div>
}
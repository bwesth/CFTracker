import React, { useState, useContext } from 'react'
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
    [wrapperClass,setWrapperClass] = useContext(UserContext).wrapperClass,
    menuItems = [
        {name: "Main", comp: <Main />},
        {name: "Pledges", comp: <Pledges />},
        {name: "News", comp: <News />},
        {name: "Suggestions", comp: <Suggestions />},
        {name: "Options", comp: <Settings setMenuPlacement={[setMenuPlacement, setWrapperClass]} />}
    ], 
    [displayItem,setDisplayItem] = useState(menuItems[0].comp),
    username = useContext(UserContext).user[0]

    return <div className={wrapperClass}> 
        <div className="dashboard">
            <div className="headliner">
                <p className="username">{username}</p>
                <h1>This is the Dashboard!</h1>
            </div>
            <div className="content">
                {displayItem}
            </div>
        </div>
        <Menu style={menuPlacement} click={setDisplayItem} items={menuItems} />
    </div>
}
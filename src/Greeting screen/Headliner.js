import React from 'react'
import img from '../Main/carbon-footprint-730x410.jpg'
import LoginButton from './LoginButton'
import LoginForm from './LoginForm'
import Popup from 'reactjs-popup'


export default (props) => {



    return <nav className="headliner">
        <img src={img} className="logo center" alt="logo" />
        <h1>Project name</h1>
        <Popup 
            trigger={LoginButton}
            // trigger={<button className="login ">LOG IN</button>}
            position="top center">
            <LoginForm />
        </Popup>
        
    </nav>
}
import React from 'react'
import img from '../Main/carbon-footprint-730x410.jpg'
import LoginButton from './LoginButton'


export default (props) => {



    return <nav className="headliner">
        <img src={img} className="logo center" alt="logo" />
        <h1>Project name</h1>
        <LoginButton login={props.login}/>
    </nav>
}
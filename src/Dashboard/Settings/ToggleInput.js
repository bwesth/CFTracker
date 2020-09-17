import React, { useState } from 'react'
import './options.css'

export default (props) => { 

    console.log(props.opt1.name)

    const [flap,setFlap] =  useState(props.opt2.name)
    
    const handleClick = (event) => {
        const value = event.target.value
        props.effect[0](value === props.opt1.name ? props.opt1.effect[0] : props.opt2.effect[0])
        props.effect[1](value === props.opt1.name ? props.opt1.effect[1] : props.opt2.effect[1])
        setTimeout(() => {
            setFlap(value)
        }, 250)
    }
    
    return (<div className="container">
        <form class="toggle">

        <input 
            type="radio" 
            id="choice1" 
            name="choice" 
            value={props.opt1.name} 
            onChange={(event) => handleClick(event)}
        />
        <label for="choice1">{props.opt1.name}</label>

        <input 
            type="radio" 
            id="choice2" 
            name="choice" 
            value={props.opt2.name} 
            onChange={(event) => handleClick(event)}
        />
        <label for="choice2">{props.opt2.name}</label>

        <div id="flap"><span className="content">{flap}</span></div>

        </form>
    </div>)
    }
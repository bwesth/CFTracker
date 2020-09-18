import React from 'react'
import Headliner from './Headliner'
import Survey from '../Survey/Survey'
import surveyData from '../Data/survey'
import SignUpButton from './SignUpButton'
import SignUpForm from './SignUpForm'
import Popup from 'reactjs-popup'

export default (props) => {
    
    const signUp = () => {
        alert("Sign up function needed")
    }

    const login = () => {
        alert("Login function needed")
    }

    const surveyClick = () => {
        const element = document.getElementsByClassName("survey")[0]
        element.style.display = 'flex'
        element.scrollIntoView({behavior: "smooth"})
    }
    
    const popup = <Popup 
        trigger={<button className="testButton">SUBMIT</button>} 
        position="center center">
        <SignUpForm />
    </Popup>
    
    return <>
        <div id="welcoming">
            <Headliner login={props.login}/>
            <h1 className="mission">The mission statement goes here</h1>
            {popup}
            <p className="centered">Or</p>
            <button className="testButton" onClick={() => surveyClick()}>Test your CO₂ footprint!</button>
        </div>
        <Survey popup={popup} themes={surveyData.themes}/>


    </>
}
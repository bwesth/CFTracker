import React from 'react'
import PopupWrapper from '../Greeting screen/PopupWrapper'
import SignUpForm from '../Greeting screen/SignUpForm'
import surveyData from '../Data/survey'


export default (props) => {
    const th = surveyData.themes
    const data = th.map((i) => [...i.questions])
    
    console.log(data)

    return <>

        <h1>These are your test results:</h1>
        {props.data}
        <PopupWrapper 
        trigger={<button className="testButton">SIGN UP</button>}>
            <SignUpForm />
        </PopupWrapper>
    </>
}
import React from 'react'
import Question from './Question'
import * as yup from "yup"


export default (props) => {

    
    return <>
        <h1>{props.theme.name}</h1>
        {props.theme.questions.map((item) => <Question question={item} reg={props.reg}/> )}
    </>
}
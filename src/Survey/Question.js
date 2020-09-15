import React from 'react'

export default (props) => {
    //Should prolly be a form input element using a context global state
    return <>
        <p>This is a question: {props.question}</p>
    </>
}
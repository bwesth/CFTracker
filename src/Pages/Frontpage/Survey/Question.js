import React from 'react'

export default (props) => {
    return <>
        <p>{props.question}</p>
        <input name={props.question} type="radio" ref={props.reg} />
    </>
}
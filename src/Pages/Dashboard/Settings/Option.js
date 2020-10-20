import React from 'react'

export default (props) => {

    return (
        <div>
            <h1>{props.description}</h1>
            {props.children}
        </div>
    )
}
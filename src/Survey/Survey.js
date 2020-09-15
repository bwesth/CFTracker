import React from 'react'
import Theme from './Theme'

export default (props) => {
    return <div className="survey">
        {props.themes.map((item) => <Theme theme={item}/>)}
    </div>
}
import React, { useEffect } from 'react'
import Option from './Option'
import ToggleInput from './ToggleInput'
import HorizontalRadio from './HorizontalRadio'

export default (props) => {
    


    const menuStyleBottom = {
            display: "flex",
            flexDirection: "row",
            height: "10%",
    }

    const menuStyleRight = {
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "20%",
    }

    return (
        <div>
            <Option description="This is an option">
                <ToggleInput opt1={{name: "Right", effect: menuStyleRight}} opt2={{name: "Bottom", effect: menuStyleBottom}} effect={props.setMenuPlacement}/>
            </Option>
            <Option description="This is also">
                <HorizontalRadio />
            </Option>
        </div>
    )
}
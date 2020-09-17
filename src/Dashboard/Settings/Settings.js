import React from 'react'
import Option from './Option'
import ToggleInput from './ToggleInput'
import HorizontalRadio from './HorizontalRadio'

export default (props) => {

    return (
        <div>
            <Option description="Menu Placement">
                <ToggleInput opt1={{name: "Right", effect: ["menu-right", "flex-row"]}} opt2={{name: "Bottom", effect: ["menu-bottom", "flex-column"]}} effect={props.setMenuPlacement}/>
            </Option>
            <Option description="This is also">
                <HorizontalRadio />
            </Option>
        </div>
    )
}
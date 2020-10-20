import React, { useState } from 'react'

export default (props) => {
    const [selected, setSelected] = useState()
    const inputs = [1,2,3,4,5]
    
    return (
	<form>
            {inputs.map((i) => <>
                <input type="radio" name="option" id={i} value={i} required />
                <label for={i} ></label> 
            </>
            )}
	</form>
    )
}
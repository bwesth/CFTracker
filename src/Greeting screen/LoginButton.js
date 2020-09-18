import React from 'react'

export default (props) => {
    console.log(props)
    return <div className="login">
        
        {/* <button onClick={() => props.login(true)}>LOGIN</button> */}
        <button>LOGIN</button>
        <p>Already signed up?</p>
    </div>
}
import React, { useContext } from 'react'
import { UserContext } from '../Main/UserContext'

export default (props) => {

    const {username} = useContext(UserContext)

    console.log(username)
    return (
        <div>
            <h1>Main dashboard menu</h1>
            <p>Hello {username}!</p>
        </div>
    )
} 
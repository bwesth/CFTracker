import React, { useContext } from 'react'
import { UserContext } from '../../../Main/UserContext'
import FootprintBars from '../../../Shared/FootprintBars'

export default (props) => {

    const user = useContext(UserContext).user[0]

    // console.log(user)
    return (
        <div>
            <h1>Main dashboard menu</h1>
            <p>Hello {user.name}!</p>
            <FootprintBars />
        </div>
    )
} 
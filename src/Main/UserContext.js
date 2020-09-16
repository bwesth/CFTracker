import React, {useState} from "react"

const UserContext = React.createContext()

function UserProvider(props) {
    const [username, setUsername] = useState('Mette'),
    menuPlacement = useState()

    return (
        <UserContext.Provider value={{username, menuPlacement}}>
            {props.children}
        </UserContext.Provider>
    )
}

export {UserProvider, UserContext}

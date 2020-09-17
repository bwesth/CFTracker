import React, {useState} from "react"

const UserContext = React.createContext()

function UserProvider(props) {
    const [username, setUsername] = useState('Mette'),
    wrapperClass = useState('flex-column'),
    menuPlacement = useState('menu-bottom')

    return (
        <UserContext.Provider value={{username, wrapperClass, menuPlacement}}>
            {props.children}
        </UserContext.Provider>
    )
}

export {UserProvider, UserContext}

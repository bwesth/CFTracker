import React, {useState} from "react"

const UserContext = React.createContext()

function UserProvider(props) {
    const user = useState({name: '', email: ''}),
    wrapperClass = useState('flex-column'),
    menuPlacement = useState('menu-bottom')

    return (
        <UserContext.Provider value={{user, wrapperClass, menuPlacement}}>
            {props.children}
        </UserContext.Provider>
    )
}

export {UserProvider, UserContext}

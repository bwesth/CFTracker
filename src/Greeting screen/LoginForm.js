import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers'
import * as yup from "yup"
import { UserContext } from '../Main/UserContext'
import Dashboard from '../Dashboard/Dashboard'

export default (props) => {
    const [user, setUser] = useContext(UserContext).user

    const schema = yup.object().shape({
        email: yup.string().required(),
        password: yup.string().required()
    })

    const { register, handleSubmit } = useForm({
        resolver: yupResolver(schema),
    })

    const submit = (data) => {
        console.log(data)
        console.log(data.email)
        setUser(user => user= {name: user.name, email: data.email})
        props.login(<Dashboard />)
    }


    return <div className="popup-wrapper">
        <form className="login-form" onSubmit={handleSubmit(data => submit(data))}>
            <input name="email" type="email" ref={register} />
            <input name="password" type="text" ref={register} />
            <input type="submit" />
        </form>
    </div>
}
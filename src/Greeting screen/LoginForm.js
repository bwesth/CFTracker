import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers'
import * as yup from "yup"
import { UserContext } from '../Main/UserContext'

export default () => {
    const [user, setUser] = useContext(UserContext).user

    const schema = yup.object().shape({
        email: yup.string().required(),
        password: yup.string().required()
    })

    const { register, handleSubmit } = useForm({
        resolver: yupResolver(schema),
    })


    return <div className="popup-wrapper">
        <form className="login-form" onSubmit={handleSubmit(d => console.log(d))}>
            <input name="email" type="email" ref={register} />
            <input name="password" type="text" ref={register} />
            <input type="submit" />
        </form>
    </div>
}
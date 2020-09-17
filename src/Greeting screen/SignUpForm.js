import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers'
import * as yup from "yup"

export default () => {

    const schema = yup.object().shape({
        name: yup.string().required(),
        email: yup.string().required(),
        password: yup.string().required()
    })

    const { register, handleSubmit } = useForm({
        resolver: yupResolver(schema),
    })


    return <div className="signUp-wrapper">
        <form className="sign-up-form" onSubmit={handleSubmit(d => console.log(d))}>
            <input name="name" type="text" ref={register} />
            <input name="email" type="email" ref={register} />
            <input name="password" type="text" ref={register} />
            <input type="submit" />
        </form>
    </div>
}
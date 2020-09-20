import React from 'react'
import Theme from './Theme'
import { useForm } from 'react-hook-form'
// import { yupResolver } from '@hookform/resolvers'
// import * as yup from "yup"
// import PopupWrapper from '../Greeting screen/PopupWrapper'
// import SignUpForm from '../Greeting screen/SignUpForm'
import TestResults from './TestResults'


export default (props) => {

    // const yuppedThemes = props.themes.map((item) => {item: yup.string().required()})
    // const schema = yup.object().shape({
    //     yuppedThemes = props.themes.map((item) => {item}: yup.string().required())
    //     name: yup.string().required(),
    //     email: yup.string().required(),
    //     password: yup.string().required()
    // })

    const { register, handleSubmit } = useForm({})

    const submit = (data) => {
        console.log(data)
        props.setDisplay(<TestResults results={data}/>)
    }

    return <div className="survey">
        <form onSubmit={handleSubmit(d => submit(d))}>
            {props.themes.map((item) => <Theme reg={register} theme={item}/>)}
            <p>All done! Click send to see your carbon footprint</p>
            <input type="submit" />
        </form>
    </div>
}
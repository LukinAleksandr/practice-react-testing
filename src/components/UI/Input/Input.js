import React from 'react'
import classes from './Input.module.css'

function isInvalid({valid, touched, shouldValidate}){
    return !valid && shouldValidate && touched
}

const Input = props => {
    const cls = [
        classes.Input
    ]
    const htmlFor = `${props.type || 'text'}-${Math.random()}`;

    if(isInvalid(props)){
        cls.push(classes.invalid)
    }

    return (
        <div className={cls.join(' ')}>
            <label htmlFor={htmlFor}>{props.label}</label>
            <input 
                type={props.type || 'text'} 
                value={props.value} 
                disabled={props.disabled || false} 
                id={htmlFor}
                onChange={props.onChange}
            >
            </input>
            {
                isInvalid(props) ? <span>{props.errorMessage || 'Ошибка!'}</span> : null
            }
            
        </div>
    )
}



export default Input
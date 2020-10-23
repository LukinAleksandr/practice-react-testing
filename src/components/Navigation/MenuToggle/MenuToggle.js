import React from 'react'
import classes from './MenuToggle.module.css'
// import Button from '../UI/Button/Button'

const MenuToggle = (props) => {
    const cls = [
        classes.MenuToggle,
        'fa',
    ]

    if(props.isOpen){
        cls.push('fa-times')
        cls.push(classes.open)
    }else{
        cls.push('fa-bars')
    }

    return(
        <i 
            className={cls.join(' ')}
            onClick={props.onToggl}
        ></i>
    )
}


export default MenuToggle

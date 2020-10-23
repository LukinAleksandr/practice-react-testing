import React from 'react'
import classes from './AnswersList.module.css'
import AnswerItem from './AnswerItem/AnswerItem'



const AnswersList = props => {
    // console.log(props);
    
    return(
    <ul className={classes.AnswersList}>
        {props.answers.map(
            (i, index)=>(<AnswerItem key={index} state={props.state ? props.state[i.id] : null} answer={i} onAnswerClick={props.onAnswerClick}/>)  
        )}
    </ul>
)}
export default AnswersList
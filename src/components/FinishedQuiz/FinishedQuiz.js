import React from 'react'
import classes from './FinishedQuiz.module.css'
import Button from '../UI/Button/Button'
import {Link} from 'react-router-dom'


const FinishedQuiz = props =>{

    let niceAnswer = 0
    for (let i in props.results){
        if(props.results[i] === 'success'){
            niceAnswer++
        }
    }
    
    return (
        <div className={classes.FinishedQuiz}>
            <ul>
                {props.quiz.map((item, index) => {
                    const cls = ['fa', props.results[index + 1] === 'error' ? 'fa-times' : 'fa-check', classes[props.results[index + 1]]];
                     
                    return (
                        <li key={index}>
                            <strong>
                                {index + 1}.&nbsp;{item.question}
                            </strong>
                            <i className={cls.join(' ')}></i>

                        </li>
                    )
                })}
            </ul> 
            <p>Правильно {niceAnswer} из {props.quiz.length}</p>

            <div>
                <Button type='primory' onClick={props.restart}>Повторить</Button>
                <Link to='/'>
                <Button type='success' onClick={null}>Перейти в список тестов</Button>
                </Link>
            </div>
        </div>
    )
}

export default FinishedQuiz
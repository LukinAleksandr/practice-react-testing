import React from 'react'
import classes from './ActiveQuiz.module.css'
import AnswerList from './AnswersList/AnswersList'


const AciveQuiz = props => (// компонет текущего вопроса
    //получаем пропс со всеми потрохами что передавали
    <div className={classes.AciveQuiz}>
        <p className={classes.Question}>
            <span>
                <strong>{props.answerNumber + "."}</strong>
                &nbsp;{props.question}
            </span>
            <small> {props.answerNumber} из {props.quizLength} </small>
        </p>
        <AnswerList
            state={props.state}
            answers={props.answers}
            onAnswerClick={props.onAnswerClick}
        />
    </div>
)

export default AciveQuiz
import React, {Component} from 'react'
import classes from './Quiz.module.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz'
import Loader from '../../components/UI/Loader/Loader'
import {connect} from 'react-redux'
import {fetchQuizById, quizAnswerClick, testRestart} from '../../store/actions/quiz'




class Quiz extends Component{
    componentDidMount(){
        this.props.fetchQuizById(this.props.match.params.id)
    }

    componentWillUnmount(){
        this.props.testRestart()
    }

    render(){
        console.log(this.props);

        return(
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Ответьте на все вопросы</h1>
                    {this.props.loading || !this.props.quiz
                        ? <Loader/> 
                        : this.props.isFinished 
                            ? <FinishedQuiz results={this.props.results} quiz={this.props.quiz} restart={this.props.testRestart}/> 
                            : <ActiveQuiz // создаем блок вопроса и ответов
                            question={this.props.quiz[this.props.activeQuestion].question} //передаем текст текущего вопроса (при вервой загрузке - первый вопрос)
                            answers={this.props.quiz[this.props.activeQuestion].answers} // передаем массив всех вариантов ответов
                            onAnswerClick={this.props.quizAnswerClick}    // передаем функцию которая будет ловить выбраный вариант пользователем. Принимает в себя id ответа пользователя
                            quizLength={this.props.quiz.length} // передаем общее количесво существующих вопросов (используем в месте "n из n")
                            answerNumber={this.props.activeQuestion + 1} // передаем номер текущего вопроса (используем в месте "n из n")
                            state = {this.props.answerState} // передаем null если пользователь не отвтил или массив с вариантом ответа который выбрал пользователь + сообщение верный ли был ответ (используем в подсветке нужным цветом)}
                            />  
                    }
                    
                </div>
            </div>
        )
    }
}


function mapStateToProps(globalStore){
    return {
        results: globalStore.quiz.results,
        isFinished: globalStore.quiz.isFinished,
        activeQuestion: globalStore.quiz.activeQuestion,
        answerState: globalStore.quiz.answerState,
        quiz: globalStore.quiz.quiz,
        loading: globalStore.quiz.loading
    }
}
function mapDispatchToProps(dispachhhh){
    return {
        fetchQuizById: id => dispachhhh(fetchQuizById(id)),
        quizAnswerClick: answerId =>  dispachhhh(quizAnswerClick(answerId)),
        testRestart: ()=> dispachhhh(testRestart())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz)
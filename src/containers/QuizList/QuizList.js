import React, {Component} from 'react'
import classes from './QuizList.module.css'
import {NavLink} from 'react-router-dom'
import Loader from '../../components/UI/Loader/Loader'
import {connect} from 'react-redux'
import {fetchQuizes} from '../../store/actions/quiz'



class QuizList extends Component{ 
    renderQuizes = () =>{     
        console.log(this.props)   
   
        return this.props.quizes.map(item=>{
            return (
                <li key={item.id}>
                    <NavLink to={'/quiz/' + item.id}>
                        {item.name}
                    </NavLink>
                </li>
            )
        })
    }
    componentDidMount(){
        this.props.fetchQuizesssss()
    }

    render() {
        return (
            <div className={classes.QuizList}>
                <h1>Список тестов</h1>
                <br></br>
                <ul>
                    {this.props.loading && this.props.quizes.length !== 0 ? <Loader/> : this.renderQuizes()}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(globalStore){
    return {
            quizes: globalStore.quiz.quizes,
            loading: globalStore.quiz.loading
    }
}
function mapDispatchToProps(dispachhhh){
    return {
        fetchQuizesssss: () => dispachhhh(fetchQuizes())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizList)
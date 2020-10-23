import React, {Component} from 'react'
import classes from './Drawer.module.css'
import {NavLink} from 'react-router-dom'
import Backdrop from '../../UI/Backdrop/Backdrop'
import MenuToggle from '../MenuToggle/MenuToggle'


class Drawer extends Component{

    clickHandler = () =>{
        this.props.onClose()
    }

    renderLinks(links){
        
        return links.map((item, index) => {
            return (
                <li key={index}>
                    <NavLink
                        to={item.to}
                        exact={item.exect}
                        activeClassName={classes.active}
                        onClick={this.clickHandler}
                    >
                        {item.label}      
                    </NavLink>
                </li>
            )
        })
    }



    render(){
        const cls = [
            classes.Drawer
        ]

        if(!this.props.isOpen){
            cls.push(classes.close)
        }

        const links = [
            {
                to: '/',
                label: 'Список',
                exect: true
            }
            
        
        ]

        if(this.props.isAuthenticated){
            links.push({
                to: '/quiz-creator',
                label: 'Создать тест',
                exect: false
            })
            links.push({
                to: '/logout',
                label: 'Выйти',
                exect: false
            })
        }else{
            links.push(
                {
                    to: '/auth',
                    label: 'Авторизация',
                    exect: false
                })
        }

        return (
            <React.Fragment>
            {this.props.isOpen ? <Backdrop onClick={this.props.onClose}/> : null}    
            
            <nav className={cls.join(' ')}>
                <ul>
                    {this.renderLinks(links)}
                </ul>
            </nav>
            <MenuToggle
                    onToggl={this.props.onToggle}
                    isOpen={this.props.isOpen}
            />
            </React.Fragment>
        )
    }
}


export default Drawer
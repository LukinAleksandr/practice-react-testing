import React, {Component} from 'react'
import classes from './Layout.module.css'
import Drawer from '../../components/Navigation/Drawer/Drawer'
import {connect} from 'react-redux'

class Layout extends Component{

    state = {
        menu: false
    }

    toggleMenuHandler = () => {
        this.setState({
            menu: !this.state.menu
        })
    }

    toggeBlurHandler = () => {
        this.setState({
            menu: false
        })
    }

    render(){
        console.log(this.props)

        return (
            <div className={classes.Layout}>
                <Drawer
                    isOpen={this.state.menu}
                    onClose={this.toggeBlurHandler}
                    onToggle={this.toggleMenuHandler}
                    isAuthenticated={this.props.isAuthenticated}
                />
                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

function mapStateToProprs(state){  
    return {
      isAuthenticated: !!state.auth.token
    }
  }
export default connect(mapStateToProprs)(Layout) 
import React, { Component } from 'react';

class Header extends Component {
    render () {
        return (
            <div>
                <header className = "header">
                <h1>active</h1>
                <input 
                    onKeyPress = {this.props.addTodo} 
                    className = "new-todo" 
                    placeholder = "What needs to be done?" 
                    autoFocus 
                />
                </header>
            </div>
        )
    }
}     
export default Header;
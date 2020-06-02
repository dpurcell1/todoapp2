import React, { Component } from 'react';
import {NavLink} from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
              {/* <!-- This should be `0 items left` by default --> */}
              <span className="todo-count">
                <strong>{this.props.remainder()}</strong> item(s) left
              </span>
              <ul className="filters">
                <li>
                  <NavLink exact activeClassName = "selected" to="/">All</NavLink>
                </li>
                <li>
                  <NavLink activeClassName = "selected" to="/active">Active</NavLink>
                </li>
                <li>
                  <NavLink activeClassName= "selected" to ="/completed">Completed</NavLink>
                </li>
              </ul>
              <button 
                onClick = {this.props.clearCompleted} 
                className="clear-completed">Clear completed
              </button>
            </footer>
        )
    }
}

export default Footer;
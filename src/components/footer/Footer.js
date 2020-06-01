import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
              {/* <!-- This should be `0 items left` by default --> */}
              <span className="todo-count">
                <strong>0</strong> item(s) left
              </span>
              <ul className="filters">
                <Link to = "/">All</Link>
                {"  "} 
                <Link to ="/active">Active</Link>
                {"  "} 
                <Link to = "/completed">Completed </Link>
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
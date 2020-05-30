import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
            {/* <!-- This should be `0 items left` by default --> */}
            <span className="todo-count">
              <strong>0</strong> item(s) left
            </span>
            <ul className="filters">
              <li>
                <a href="/">All</a>
              </li>
              <li>
                <a href="/active">Active</a>
              </li>
              <li>
                <a href="/completed">Completed</a>
              </li>
            </ul>
            <button onClick = {this.props.clearCompleted} className="clear-completed">Clear completed</button>
            </footer>
        )
    }
}

export default Footer;
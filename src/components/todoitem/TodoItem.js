import React, {Component} from 'react';

class TodoItem extends Component {
    render() {
      return (
        <li className = {this.props.completed ? "completed" : ""}>
          <div className = "view">
            <input 
              onClick = {this.props.toggle} 
              className = "toggle" type = "checkbox" 
              checked = {this.props.completed} 
            />
            <label>{this.props.title}</label>
            <button 
              onClick = {this.props.destroy} 
              className = "destroy">            
            </button>
          </div>
        </li>
      );
    }
  }

  export default TodoItem;
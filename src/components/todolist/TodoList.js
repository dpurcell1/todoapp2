import React, {Component} from 'react';
import TodoItem from "../todoitem/TodoItem"

class TodoList extends Component {  
    render() {
      return (
        <section className = "main">
          <ul className = "todo-list">
            {this.props.todos.map((todo) => (
              <TodoItem 
                title = {todo.title} 
                completed = {todo.completed} 
                toggle = {event => this.props.toggle(todo.id)}
                destroy = {event => this.props.destroy(todo.id)} 
              />
            ))}
          </ul>
        </section>
      );
    }
  }

  export default TodoList;
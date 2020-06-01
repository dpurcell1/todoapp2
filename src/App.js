import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import todosList from "./todos.json";
import { Section } from './components/section/Section'
import Header from './components/header/Header'
import ActiveHeader from './components/activeHeader/ActiveHeader'
import CompletedHeader from './components/completedHeader/CompletedHeader'
import Footer from './components/footer/Footer'
import TodoList from './components/todolist/TodoList';
import TodoItem from './components/todoitem/TodoItem'

const Active = (props) => {
  let activeTodos = [];
  props.todos.map((todo) => {
    if (!todo.completed) {
      activeTodos.push(todo)
    }
  })
  return (    
    <section className = "main">
      <ul className = "todo-list">
        {activeTodos.map((todo) => (
          <TodoItem 
            userId = {todo.userId}
            id = {todo.id}
            title = {todo.title}
            completed = {todo.completed}
          />
        ))}
      </ul>
    </section>    
  )  
} 

const Completed = (props) => {
  let completedTodos = [];
  props.todos.map((todo) => {
    if (todo.completed) {
      completedTodos.push(todo)
    }
  })
  return (
    <section className = "main">
      <ul className = "todo-list">
        {completedTodos.map((todo) => (
          <TodoItem 
            userId = {todo.userId}
            id = {todo.id}
            title = {todo.title}
            completed = {todo.completed}
          />
      ))}
    </ul>
  </section>
  )   
} 

class App extends Component {
  constructor(props) {
    super(props) 
      
    this.state = {
      todos: todosList
      
    };
  } 
  render() {
    return (
      <div className = "todoapp">
        <Section>          
        <Switch>
          <Route exact path = "/">
            <div className = "header">   
              <Header                 
                addTodo = {this.addTodo} />
            </div>
              <TodoList 
                todos = {this.state.todos} 
                toggle = {this.toggle} 
                destroy = {this.destroy} 
              /> 
          </Route>
          <Route path = "/active">
            <div className = "header">   
              <ActiveHeader addTodo = {this.addTodo} />
            </div>
            <Active todos = {this.state.todos} 
            />
          </Route>  
          <Route path = "/completed">
            <div className = "header">   
              <CompletedHeader addTodo = {this.addTodo} />
            </div>
            <Completed todos = {this.state.todos}
            />
          </Route> 
        </Switch>         
          <Footer
            remainder = {this.showRemainder} 
            clearCompleted = {this.clearCompleted} />
        </Section>
      </div>
    );
  }
  
  showRemainder = () => {
    let remainder = 0;
    this.state.todos.map((todo) => {
      if (!todo.completed) {
        remainder += 1;
      }
    })
    return remainder;
  }
  
  addTodo = (event) => {
    if (event.key === "Enter") {          
      let newTodo = {
       "userId": 1,
       "id": uuidv4(),
       "title": event.target.value,
       "completed": false
      }    
      this.setState((state) => {
        let allTodos = [...state.todos, newTodo]    
        return {          
          todos: allTodos
        }         
      })
    }           
  }
  
  toggle = (id) => {         
    let newTodos = this.state.todos.map((todo) =>{
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }
      return todo;
    }) 
    this.setState((state) => {
      return {
        ...state,
        todos: newTodos
      }
    })
  }

  destroy = (id) => {    
    let newTodos = []
    this.state.todos.map((todo) => {
      if(todo.id !== id) {
        let newItem = todo;
        newTodos.push(newItem)
      }
    })
    this.setState((state) => {
      return {
        ...state,
        todos: newTodos
      }
    })
  }  

  clearCompleted = () => {
    let newTodos = []
    this.state.todos.map((todo) => { 
      if (!todo.completed) {
        let newItem = todo;
        newTodos.push(newItem); 
      }
    })
      this.setState((state) => {
        return {
          ...state,
          todos: newTodos
        }
      })   
  }
}

export default App;

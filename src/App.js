import React, { Component } from "react";
import todosList from "./todos.json";
import { Section } from './components/section/Section'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import TodoList from './components/todolist/TodoList';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props) 
      
    this.state = {
      todos: todosList,
    };
  } 
  render() {
    return (
      <div className = "todoapp">
        <Section>
          <div className = "header">   
            <Header addTodo = {this.addTodo} />
          </div>
        <Switch>
          <Route path = "/active" />
          <Route path = "/completed" />
        </Switch>        
          <TodoList 
            todos = {this.state.todos} 
            toggle = {this.toggle} 
            destroy = {this.destroy} 
          />
          <Footer clearCompleted = {this.clearCompleted} />
        </Section>
      </div>
    );
  }  
  
  addTodo = (event) => {    
    if (event.key === "Enter") {       
      let newTodo = {
        "userId": 1,
        "id": Math.random() * 25619,
        "title": event.target.value,
        "completed": false
      }      
      let allTodos = this.state.todos.slice()
      allTodos.push(newTodo); 
      this.setState((state) => {
        return {
          ...state,
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

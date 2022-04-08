import React from 'react';
import PageTitle from './page-title';
import TodoList from './todo-list';
import TodoForm from './todo-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  componentDidMount() {
    /**
     * Use fetch to send a GET request to `/api/todos`.
     * Then 😉, once the response JSON is received and parsed,
     * update state with the received todos.
     */
    // http://localhost:3000/api/todos
    fetch('http://localhost:3000/api/todos', { method: 'GET' })
      .then(response => response.json().then(data => {
        this.setState({ todos: data });
      }));

  }

  addTodo(newTodo) {
    /**
     *
     * const newTodo = {
      task: this.state.task,
      isCompleted: false
    };
    * Use fetch to send a POST request to `/api/todos`.
    * Then 😉, once the response JSON is received and parsed,
    *   - create a shallow copy of the todos array from state
    *   - add the todo received from the server to the copied array
    *   - replace the old todos array in state with the new one
    *
    * DO NOT MUTATE the original state array, nor any objects within it.
    * https://reactjs.org/docs/optimizing-performance.html#the-power-of-not-mutating-data
    *
    * TIP: Be sure to SERIALIZE the todo object in the body with JSON.stringify()
    * and specify the "Content-Type" header as "application/json"
    *
    * TIP: Use Array.prototype.concat to create a new array containing the contents
    * of the old array, plus the object returned by the server.
    */
    // console.log(newTodo.task);
    const submitData = newTodo;
    fetch('http://localhost:3000/api/todos',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submitData)
      })
      .then(response => {

        const resJSON = response.json();
        resJSON.then(data => {
          const newTodos = this.state.todos.concat(data);
          this.setState({ todos: newTodos });
        });
      });

  }

  toggleCompleted(todoId) {
    let foundIndex = null;
    for (let i = 0; i < this.state.todos.length; i++) {
      if (todoId === this.state.todos[i].todoId) {
        foundIndex = i;
      }
    }
    const isCompletedStatus = this.state.todos[foundIndex].isCompleted;
    // console.log(isCompletedStatus);

    const changedIsCompletedObject = { isCompleted: !isCompletedStatus };
    // console.log(changedIsCompletedObject);
    /**
     * Find the index of the todo with the matching todoId in the state array.
     * Get its "isCompleted" status.
     * Make a new object containing ONE PROPERTY: the opposite "isCompleted" status.
     * Use fetch to send a PATCH request to `/api/todos/${todoId}`
     * Then 😉, once the response JSON is received and parsed,
     *   - create a shallow copy of the todos array from state
     *   - replace the old todo with the todo received from the server
     *   - replace the old todos in the state with the new one (you know the index).
     *
     * NOTE: "toggle" means to flip back and forth, so clicking a todo
     * in the list repeatedly should "toggle" its isCompleted status back and forth.
     *
     * DO NOT try to calculate the index of the todo by subtracting 1 from the id.
     *
     * DO NOT MUTATE the original state array, nor any objects within it.
     * https://reactjs.org/docs/optimizing-performance.html#the-power-of-not-mutating-data
     *
     * TIP: Be sure to SERIALIZE the updates in the body with JSON.stringify()
     * And specify the "Content-Type" header as "application/json"
     */
    // const newData = this.state.todos[foundIndex];
    const changedData = changedIsCompletedObject;
    fetch(`http://localhost:3000/api/todos/${todoId}`,
      {
        method: 'PATCH',
        body: JSON.stringify(changedData),
        headers: { 'Content-Type': 'application/json' }
      })
      .then(response => {

        const resJSON = response.json();
        resJSON.then(data => {
          // console.log('newdata', data);
          // console.log('this.state.todos', this.state.todos);
          const patchTodos = this.state.todos.concat();
          patchTodos[foundIndex] = data;
          this.setState({ todos: patchTodos });
        });
      });

  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col pt-5">
            <PageTitle text="Todo App"/>
            <TodoForm onSubmit={this.addTodo}/>
            <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
          </div>
        </div>
      </div>
    );
  }
}

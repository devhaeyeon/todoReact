import React, { Component } from 'react';
import TodoItem from './todoItem';

class TodoList extends Component {
  render() {
    const { todoLists, onDelete } = this.props;
    const todoTitle = todoLists.title;
    const viewTodoList = todoLists.todos.map((todo, index) => (
      <TodoItem
        onDelete={onDelete}
        key={todo.id}
        id={todo.id}
        title={todo.title}
        wdate={todoLists.type === 'ing' ? todo.writeDate : todo.doneDate}
      />
    ));
    return (
      <div>
        <h3>{todoTitle}</h3>
        <ul>{viewTodoList}</ul>
      </div>
    );
  }
}
export default TodoList;

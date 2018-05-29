import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import TodoWriteButton from './components/todoWriteButton';
import TodoList from './components/todoList';

/*
나만의 명칭 컨벤션
이벤트 핸들링 함수명 앞에 프리픽스 : handle
전달할 핸들링 함수명 프롭스 앞에 프리픽스 : on
*/

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doneTodos: {
        type: 'done',
        title: '완료된 Todo',
        todos: [
          {
            id: 100001,
            status: true,
            title: '투두 등록',
            writeDate: '2018.04.02',
            doneDate: '2018.05.26',
            writer: 'scarlett.kim',
          },
          {
            id: 100002,
            status: true,
            title: '투두 삭제',
            writeDate: '2018.04.02',
            doneDate: '2018.05.26',
            writer: 'scarlett.kim',
          },
        ],
      },
      ingTodos: {
        type: 'ing',
        title: '진행중 Todo',
        todos: [
          {
            id: 200001,
            status: false,
            title: '투두 수정',
            writeDate: '2018.04.02',
            doneDate: '',
            writer: 'scarlett.kim',
          },
          {
            id: 200002,
            status: false,
            title: '투두 상태 변경',
            writeDate: '2018.03.01',
            doneDate: '',
            writer: 'scarlett.kim',
          },
        ],
      },
    };
  }

  handleAddTodo = addTodo => {
    this.setState({
      ingTodos: {
        title: '진행중 Todo',
        todos: this.state.ingTodos.todos.concat({
          ...addTodo,
        }),
        type: 'ing',
      },
    });
  };

  handleDeleteTodo = id => {
    this.setState({
      ingTodos: {
        title: '진행중 Todo',
        type: 'ing',
        todos: this.state.ingTodos.todos.filter(obj => {
          return obj.id !== id;
        }),
      },
    });
  };

  render() {
    const ingTodoLists = this.state.ingTodos;
    const doneTodoLists = this.state.doneTodos;
    return (
      <div className="App">
        <Header />
        <TodoWriteButton
          writeType="write"
          onAdd={this.handleAddTodo}
          ingTodos={ingTodoLists}
        />
        <TodoList todoLists={ingTodoLists} onDelete={this.handleDeleteTodo} />
        <TodoList todoLists={doneTodoLists} onDelete={this.handleDeleteTodo} />
      </div>
    );
  }
}

export default App;

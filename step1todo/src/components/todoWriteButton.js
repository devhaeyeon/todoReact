import React, { Component } from 'react';

class TodoWriteButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 20001,
      status: false,
      title: '',
      writeDate: '',
      doneDate: '',
      writer: '',
    };
  }

  getDateNumberText(s) {
    if (s < 10) {
      return `0${s}`;
    } else {
      return s;
    }
  }

  getTodayDate() {
    const dateObj = new Date();
    const year = dateObj.getFullYear();
    let month = this.getDateNumberText(dateObj.getMonth() + 1);
    let day = this.getDateNumberText(dateObj.getDate());
    return `${year}.${month}.${day}`;
  }

  getTodoLastIdx() {
    const idxArr = [];
    this.props.ingTodos.todos.map(obj => {
      return idxArr.push(obj.id);
    });
    const idxMax = Math.max.apply(null, idxArr);
    return idxMax + 1;
  }

  handleChange = e => {
    const dateTxt = this.getTodayDate();
    const latestIdx = this.getTodoLastIdx();

    this.setState({
      id: latestIdx,
      status: false,
      title: e.currentTarget.value,
      writeDate: dateTxt,
      doneDate: '',
      writer: 'scarlett.kim',
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.onAdd(this.state);
    this.setState({
      status: false,
      title: '',
      writeDate: '',
      doneDate: '',
      writer: '',
    });
  };

  render() {
    const { writeType } = this.props;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="todoTextInput">
            <span className="screen_out">
              {writeType === 'write' ? '등록' : '수정'}
            </span>
          </label>
          <input
            type="text"
            id="todoTextInput"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button>{writeType === 'write' ? '등록' : '수정'}</button>
        </form>
      </div>
    );
  }
}

export default TodoWriteButton;

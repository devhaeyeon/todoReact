import React, { Component } from 'react';

class TodoItem extends Component {
  render() {
    const { id, title, wdate, onDelete } = this.props;
    return (
      <li>
        <div>
          <h4>{wdate}</h4>
          <input type="checkbox" /> {title}
          <button>m</button>
          <button onClick={() => onDelete(id)}>d</button>
        </div>
      </li>
    );
  }
}

export default TodoItem;

import React, { Component } from 'react';

class TodoItem extends Component {
  render() {
    const { id, title, wdate,status, todoType, onDelete,onStatusModify } = this.props;
    return (
      <li>
        <div>
          <h4>{wdate}</h4>
          <input type="checkbox" checked={status} onChange={()=>onStatusModify(id, todoType)}/> {title}
          <button>m</button>
          <button onClick={() => onDelete(id)}>d</button>
        </div>
      </li>
    );
  }
}

export default TodoItem;

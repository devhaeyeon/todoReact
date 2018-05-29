import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>ToDo List</h1>
          <div className="wrap_search">
            <label htmlFor="searchBarInput">
              <span className="screen_out">검색</span>
            </label>
            <input type="text" id="searchBarInput" />
            <button>검색</button>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;

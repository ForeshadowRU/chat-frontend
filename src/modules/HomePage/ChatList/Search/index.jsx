import React, { Component } from "react";
import "../../index.sass";
class Search extends Component {
  render() {
    return (
      <div className="homepage__chatlist__search">
        <label>
          <span>Search for friends</span>
          <input type="text" className="homepage__chatlist__search__input" />
        </label>
      </div>
    );
  }
}

export default Search;

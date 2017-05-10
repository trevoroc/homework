import React from 'react';

import GiphysIndex from './giphys_index';

class GiphysSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ""
    };
  }

  handleChange(e) {
    this.setState({ searchTerm: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

  }

  render() {
    return (
      <form>
        <input type="text" value={ this.state.searchTerm }
          onChange={ this.handleChange }></input>
        <button onClick={ this.handleSubmit }>Search Giphys</button>
      </form>
    );
  }
}

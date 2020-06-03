import React from 'react';
import ResultsPerPage from './ResultsPerPage';

class SearchBar extends React.Component {
  state = { term: '', resultsPerPage: 10 };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit({
      term: this.state.term,
      resultsPerPage: this.state.resultsPerPage,
      currentPage: 1
    });
  };

  onChangeResultsPerPage = (resultsPerPage) => {
    this.setState({ resultsPerPage });
    console.log(resultsPerPage);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
        <ResultsPerPage onChangeResultsPerPage={this.onChangeResultsPerPage} />
      </div>
    );
  }
}

export default SearchBar;

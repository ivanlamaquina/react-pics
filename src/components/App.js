import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import PaginationBar from './PaginationBar';

class App extends React.Component {
  state = {
    images: [],
    totalPages: 0,
    totalResults: 0,
    resultsPerPage: 10,
    currentPage: 1,
    term: ''
  };

  onSearchSubmit = async ({ term, resultsPerPage, currentPage }) => {
    this.setState({ term, resultsPerPage });

    const response = await unsplash.get('/search/photos', {
      params: {
        query: term,
        per_page: resultsPerPage,
        page: currentPage
      }
    });
    console.log('Total PageS: ' + response.data.total_pages);
    console.log('Total results: ' + response.data.total);
    this.setState({
      term: term,
      resultsPerPage: resultsPerPage,
      currentPage: currentPage,
      images: response.data.results,
      totalPages: response.data.total_pages,
      totalResults: response.data.total
    });
  };

  handlePaginationChange = (newPage) => {
    this.onSearchSubmit({
      term: this.state.term,
      resultsPerPage: this.state.resultsPerPage,
      currentPage: newPage
    });
  };

  render() {
    console.log('app render');
    return (
      <div
        className="ui container centered"
        style={{ marginTop: '10px', marginBottom: '10px' }}
      >
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
        <PaginationBar
          totalPages={this.state.totalPages}
          currentPage={this.state.currentPage}
          onPageChange={this.handlePaginationChange}
        />
      </div>
    );
  }
}

export default App;

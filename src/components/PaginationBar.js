import React from 'react';
import { Pagination } from 'semantic-ui-react';

class PaginationBar extends React.Component {
  handlePaginationChange = (e, { activePage }) => {
    this.props.onPageChange(activePage);
  };

  render() {
    console.log('paginationbar render');
    if (this.props.totalPages > 1) {
      return (
        <div className="ui segment center aligned">
          <Pagination
            activePage={this.props.currentPage}
            totalPages={this.props.totalPages}
            onPageChange={this.handlePaginationChange}
            size="mini"
          />
        </div>
      );
    }
    return '';
  }
}

export default PaginationBar;

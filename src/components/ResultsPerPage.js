import React from 'react';
import { Form } from 'semantic-ui-react';

class ResultsPerPage extends React.Component {
  constructor(props) {
    super(props);
    this.ResultsPerPageOptions = [
      { key: 10, text: '10', value: 10 },
      { key: 20, text: '20', value: 20 },
      { key: 50, text: '30', value: 50 }
    ];
  }

  onChangeResults = (event, { value }) => {
    this.props.onChangeResultsPerPage(value);
  };

  render() {
    return (
      <Form size="mini">
        <Form.Dropdown
          label="Resultados por página"
          inline
          defaultValue={this.ResultsPerPageOptions[0].value}
          options={this.ResultsPerPageOptions}
          onChange={this.onChangeResults}
        />
      </Form>
    );
  }
}

export default ResultsPerPage;

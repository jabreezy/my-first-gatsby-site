import React from 'react';
import Page from './page';

export default class Pages extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const formId = this.props.data.formOrder[0];
    const pages = this.props.data.forms[formId].paging.map((page) => <Page components={page} />);

    return (
      <>
        <h2>Pages</h2>
        {pages}
      </>
    );
  }
}

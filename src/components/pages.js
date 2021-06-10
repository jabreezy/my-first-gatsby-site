import React from 'react';
import Page from './page';

export default class Pages extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const formId = this.props.data.formOrder[0];
    const getPageComponents = this.props.data.forms[formId].page_components;
    const pages = this.props.data.forms[formId].paging.map((page, i) => {
      return <Page key={i} componentIds={page}  pageComponents={getPageComponents} />
    });

    return (
      <>
        {pages}
      </>
    );
  }
}

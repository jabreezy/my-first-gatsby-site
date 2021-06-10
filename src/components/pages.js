import React from 'react';
import Page from './page';
import Navigation from './navigation/navigation';

export default class Pages extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 0,
      pages: [],
    }

    this.navigationHandler = this.navigationHandler.bind(this);
  }

  componentDidMount() {
    const formId = this.props.data.formOrder[0];
    const { paging } = this.props.data.forms[formId];
    const formPages = paging.map((page, i) => i);
    this.setState({
      pages: formPages
    })
  }

  navigationHandler(direction, formPages) {
    const { currentPage } = this.state;
    const lastPage = formPages.length - 1;
    if (direction === 'next') {
      if (currentPage != lastPage) {
        this.setState({ currentPage: (currentPage + 1) });
      }
    } else {
      if (currentPage != 0) {
        this.setState({ currentPage: (currentPage - 1) })
      }
    }
  }

  render() {
    const formId = this.props.data.formOrder[0];
    const getPageComponents = this.props.data.forms[formId].page_components;
    const { currentPage, pages } = this.state;
    const navigation = <Navigation navigationHandler={this.navigationHandler} formPages={pages} />

    return (
      <>
        <Page
          componentIds={this.props.data.forms[formId].paging[currentPage]}
          pageComponents={getPageComponents}
        />
        <div>{navigation}</div>
      </>
    );
  }
}

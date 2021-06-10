import React from 'react';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigationHandler, formPages } = this.props;
    return (
      <>
        <button
          type="button"
          onClick={(event) => {
            navigationHandler('prev', formPages);
          }}
        >Previous</button>
        <button
          type="button"
          onClick={(event) => {
            navigationHandler('next', formPages);
          }}
        >Next</button>
      </>
    );
  }
}

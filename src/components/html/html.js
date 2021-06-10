import React from 'react';

export default class Html extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const createMarkup = markup => ({ __html: `${markup}` });
    const { text } = this.props.componentData.component;

    return (
      <>
        <div
          dangerouslySetInnerHTML={createMarkup(text)}
        />
      </>
    );
  }
}

import React from 'react';

export default class Textfield extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { text } = this.props.componentData.component;

    return (
      <>
        <label>{text}</label>
        <input
          type="text"
        />
      </>
    );
  }
}

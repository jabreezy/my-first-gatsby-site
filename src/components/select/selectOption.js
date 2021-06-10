import React from 'react';

export default class SelectOption extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { key, value } = this.props.option;

    return (
      <>
      <option
        value={value}
      >
        {key}
      </option>
      </>
    );
  }
}

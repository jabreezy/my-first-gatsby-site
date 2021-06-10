import React from 'react';

export default class RadioOption extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, option } = this.props;
    const { key, value } = option;

    return (
      <>
        <input
        type="radio"
          name={name}
          value={value}
        />
        <label>{key}</label>
      </>
    );
  }
}

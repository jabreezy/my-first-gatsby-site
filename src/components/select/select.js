import React from 'react';
import SelectOption from './selectOption';

export default class Select extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { text } = this.props.componentData.component;
    const { options } = this.props.componentData.input;

    return (
      <>
        <label>{text}</label>
        <select>
          {options.map((option, i) => {
              return (<SelectOption key={i} option={option} />)
            }
          )}
        </select>
      </>
    );
  }
}

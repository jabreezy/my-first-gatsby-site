import React from 'react';
import RadioOption from './radioOption';

export default class Radio extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { options, urlMapping } = this.props.componentData.input;
    const { text } = this.props.componentData.component;
    return (
      <>
        <p>{text}</p>
        {options.map((option, i) => {
          return (<RadioOption key={i} option={option} name={urlMapping} />)
        })}
      </>
    );
  }
}

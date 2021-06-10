import React from 'react';
import { getComponentType } from './helpers';
import Radio from '../components/radios/radio';
import Hidden from '../components/hidden/hidden';
import Html from '../components/html/html';
import Loader from '../components/loader/loader';
import Select from '../components/select/select';
import Textfield from '../components/textfield/textfield';

export default class FormInputs extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const componentType = getComponentType(this.props.componentData);
    const componentMappings = {
      radios: <Radio componentData={this.props.componentData} />,
      textfield: <Textfield componentData={this.props.componentData} />,
      html: <Html componentData={this.props.componentData} />,
      loader: <Loader componentData={this.props.componentData} />,
      textfield: <Textfield componentData={this.props.componentData} />,
      select: <Select componentData={this.props.componentData} />,
      hidden: <Hidden componentData={this.props.componentData} />,
    }

    const component = componentMappings[componentType];
    return (
      <>
        {component}
      </>
    );
  }
}

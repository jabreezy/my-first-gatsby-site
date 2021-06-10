import React from 'react';
import { getComponent } from '../helpers/helpers';
import FormInputs from '../helpers/formComponentRenderer';

export default class Page extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const components = this.props.componentIds.map((componentId) => {
      const component = getComponent(this.props.pageComponents, componentId);
      return <FormInputs componentData={component} />
    });
    return (
      <>
      <h3>page</h3>
      {components}
      </>
    );
  }
}

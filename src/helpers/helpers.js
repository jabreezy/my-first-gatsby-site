export const getComponent = (components, componentId) => {
  const component = components[`component_${componentId}`];
  return component;
}

export const getComponentType = (component) => {
  const componentType = component.component.type;
  return componentType;
}

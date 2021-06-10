import React from 'react';
import JSONData from '../../content/webformSettings.json';
import Pages from '../components/pages';

export default class Webform extends React.Component {
  componentDidMount() {
    console.log('data', JSONData);
  }

  render() {
    return (
      <Pages data={JSONData} />
    );
  }
}

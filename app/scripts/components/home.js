import React from 'react';
import Mosaic from './mosaic'
import mosaic from '../api/mosaic'

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items : {}
    };
  }

  componentWillMount() {
    this.setState({ 
      items: mosaic
    });
  }

  render() {
    return (
      <div id="highlight" className="bloc tpl-small clearfix">
        <Mosaic items={this.state.items} />
      </div>
    );
  }
}

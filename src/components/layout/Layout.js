import React, { Component } from 'react';
import Menu from './menu/Menu.js';
import Content from './content/Content.js';

class Layout extends Component {
  constructor(props) {
    super(props);
  }
  state = {};

  render() {
    return (
      <div>
          <Content/>
      </div>
    )
  }
}

export default Layout;

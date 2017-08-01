import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'

class BaseLayout extends Component {

  render() {
    return (
      <div>
        <NavLink to='/' >Home</NavLink>
        <NavLink to='/products'>Products</NavLink>
        {this.props.children}

      </div>
    );
  }

}

export default BaseLayout;

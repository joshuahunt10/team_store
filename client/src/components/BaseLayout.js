import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'

class BaseLayout extends Component {

  render() {
    return (
      <div>
        <nav>
          <NavLink to='/' >Home</NavLink>
          <NavLink to='/products'>Products</NavLink>
        </nav>
        <div>
          
          {this.props.children}
        </div>
      </div>
    );
  }

}

export default BaseLayout;

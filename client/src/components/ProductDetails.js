import React, { Component } from 'react';
import {Link} from 'react-router-dom'


export default class View extends Component {

  // constructor(props) {
  //
  //   super(props)
  //
  //   this.state = {
  //     pageViews: 0
  //   }
  // 
  // }

  render() {

    let product = this.props.details
    return (

        <div className="card">
          <div className='title'>
            <h3>{product.name}</h3>
          </div>
          <hr />
          <div className='image'>
            {/* <img src='{product.image}'></img> */}
          </div>
          <div className='description'>
            <p>{product.description}</p>
          </div>
        </div>

    )

  }
}

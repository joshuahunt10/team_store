import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import React, { Component } from 'react';

class View extends Component {

  render() {
    if (this.props.endpoint === 'products') {
      let product = this.props.details
      return (
        <div className="card">
          <div className='title'>
            <h3>{product.name}</h3>
          </div>
          <hr>
          <div className='image'>
            <img src='{product.image}'>
          <div>
          <div className='description'>
            <p>{product.description}</p>
          </div>
        </div>
      )
    } else {
      <div>YOOOOOOO</div>
    }
  }
}

class Details extends Component {
  constructor(props) {
    super(props);
    this.state= {
      'details': {},
      'endpoint': ''
    }
  }

  componentDidMount(){
    let endpoint = this.props.match.params.endpoint
    let id = this.props.match.params.id
    let url = 'ENTER_URL_HERE' + endpoint + '/' + id


  }

  render() {
    return (
      <div>
        <h1>{this.props.match.params.endpoint}</h1>
        <View details ={this.state.details} endpoint={this.state.endpoint}/>
      </div>
    );
  }
}

export default Details;

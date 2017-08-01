import React, { Component } from 'react';

class Home extends Component {

  componentDidMount() {
    fetch('http://localhost:4000/api')
    .then(res => res.json())
    .then(data => console.log(data))
  }
  render() {
    return (
      <div>
        <h1>This page lists the top 5 products by views.</h1>
      </div>
    );
  }

}

export default Home;

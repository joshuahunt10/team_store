import React, { Component } from 'react';

class Home extends Component {

  constructor(props) {
    super(props)

    this.state = {
      pageViews: 0
    }

  }

  componentDidMount() {
    fetch('http://localhost:4000/api')
    .then(res => res.json())
    .then(data => console.log(data))
    this.state.pageViews += 1
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

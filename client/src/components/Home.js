import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {
        data: {
          fullStack: []
        }
      }
    }
  }

  componentDidMount() {
    fetch('http://localhost:4000/api')
    .then(res => res.json())
    .then(data => {
      this.setState({
        items: data
      })
    })
  }
  render() {
    let itemArray = this.state.items.data.fullStack
    console.log('logging the state of item', itemArray);
    var topFive = itemArray.slice(0,5)

    console.log(topFive);

    return (
      <div>
        <h1>This page lists the top 5 products by views.</h1>
        {topFive.map((item) => {
          return(
            <div key={item._id}>
              <Link to={`/products/${item._id}`} ><h2>{item.name}</h2> </Link>
              <h4>{item.vendor}</h4>
              <img src={item.image} />
              <p>{item.price}</p>
              <hr />
            </div>
          )
        })}

      </div>
    );
  }

}

export default Home;

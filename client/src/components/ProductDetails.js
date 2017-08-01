import React, {Component} from 'react'
import {Link} from 'react-router-dom'


class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: []
    }
  }

  componentDidMount(){
    fetch('http://localhost:4000/api')
    .then(res => res.json())
    .then(data => {
      const item = data.data.fullStack.find( (item) => {
        return item._id === this.props.match.params.id
      })
      this.setState({
        item: item
      })
    })
  }

  render() {
    console.log(this.state.item);
    let item = this.state.item
      return (
        <div className="card">
          <h1>{item.name}</h1>
          <h3>{item.supplier}</h3>
          <img src={item.image} />
          <p>{item.description}</p>
          <strong>${item.price}</strong>

        </div>
      )
    }
  }


export default ProductDetails

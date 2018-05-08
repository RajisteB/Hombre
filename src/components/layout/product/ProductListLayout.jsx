import React, { Component } from 'react';
import { API_KEY, SALE_API_ROUTE } from '../../../config_keys.js';
import ProductListItemCard from '../../ui/cards/ProductListItemCard'
import axios from 'axios';
import './ProductLayout.css';

class ProductListLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: []
    }
  }

  getSaleDetail = () => {
    let { match } = this.props,
        data,
        products;

    axios.get(`${SALE_API_ROUTE}${match.params.id}/detail.json?${API_KEY}`)
    .then(res => {
      data = res.data.products;
      products = data.length > 100 ? data.slice(0, 100) : data;
      this.setState({
        details: products
      })
    })
  }

  componentDidMount() {
    this.getSaleDetail();
  }

  render() {
    let { details } = this.state;
    let item = (
        details.map((product, idx) => {
          return (
            <div key={idx} >
              <ProductListItemCard data={product} location={this.props.location}/>
            </div>
          )
        })
    )
    return (
      <div className="product-list-container">
        {item}
      </div>
    )
  }

};

export default ProductListLayout;
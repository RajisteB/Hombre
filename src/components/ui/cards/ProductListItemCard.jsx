import './Cards.css'
import axios from 'axios';
import DetailsBtn from '../buttons/DetailsBtn';
import { API_KEY } from '../../../config_keys.js'
import { Link, withRouter } from 'react-router-dom';
import React, { Component } from 'react';

class ProductListItemCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      brand: '',
      imgUrl: '',
      msrp: '',
      sale: '',
      allData: '',
    }
  }
  
  getProduct = () => {
    let { data } = this.props;

    axios.get(`${data}?${API_KEY}`)
      .then(res => {
        let { data } = res
        let urls = data.image_urls;

        this.setState({
          id: data.id,
          name: data.name,
          brand: data.brand,
          imgUrl: urls['1080x1440'][0].url,
          msrp: data.skus[0].msrp_price,
          sale: data.skus[0].sale_price,
          allData: data,

        })
      }).catch(error => {
        console.log(error);
      })
  }

  componentDidMount() {
    this.getProduct()
  }

  render() {
    let { name, brand, msrp, sale, imgUrl, id } = this.state;
    let image = imgUrl
    let bgImage = {
      backgroundSize: 'contain',
      backgroundImage: `url(${image})`,
      backgroundRepeat: 'no-repeat'
    }
    return (
        <div className="product-list-item-card">
          <div className="product-list-item-img" style={bgImage}></div>
          <div className="product-list-item-content">
            {/* <div className="product-list-item-overlay">
              <Link to={`/products/${id}`}>
                  <DetailsBtn />
              </Link>
            </div> */}
            <Link to={`/products/${id}`}>
              <h3>{name}</h3>
            </Link>
            <h6>{brand}</h6>
            <p>${sale}</p>
            <span>${msrp}</span>
          </div>
        </div>
    )}
}

export default withRouter(ProductListItemCard);
import React, { Component } from 'react';
import './ProductLayout.css';
import { Link, withRouter } from 'react-router-dom';
import { API_KEY, PRODUCT_API_ROUTE } from '../../../config_keys.js';
import axios from 'axios';

class ProductLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      skus: [],
      brand: '',
      count: 0,
      sizes: [],
      images: [],
      product: this.props.match.params.product_id,
      quantity: 1,
      hasSizes: false,
      dataLoaded: false,
      productUrl: '',
      description: '',
      userFave: false
    }
  }

  handleClick = (id) => {
    this.setState({ count: id });
  }

  handleFaveClick = () => {
    let { userFave } = this.state;
    this.setState({ userFave: !userFave });
  }

  handleAddQuantity = () => {
    this.setState({ quantity: this.state.quantity + 1 });
  }

  handleSubtractQuantity = () => {
    let { quantity } = this.state;
    if (quantity <= 0) {
      this.setState({ quantity: 0 });
    } else {
      this.setState({ quantity: quantity - 1 });
    }
  }

  displayProduct = () => {
    let { product } = this.state,
        sizes = [];

    axios.get(`${PRODUCT_API_ROUTE}${product}/detail.json?${API_KEY}`)
      .then(res => {
        let { data } = res;

        data.skus.map(size => {
          if (size.attributes[1]) {
            sizes.push(size.attributes[1].value);
            this.setState({ hasSizes: true, sizes });
          }
        })

        this.setState({
          name: data.name,
          skus: data.skus,
          brand: data.brand,
          images: data.image_urls['1080x1440'],
          dataLoaded: true,
          description: data.content.description,
          productUrl: data.url,
        })
      })
  }

  displayMainImage = (index) => {
    let { images, dataLoaded } = this.state
    
    if (dataLoaded) {
      let image = images[index].url;
      let styles = {
        backgroundSize: 'contain',
        backgroundImage: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top center'
      }
      return (
        <div className="main-product-image" style={styles}></div>
      )
    }
  }

  componentDidMount() {
    this.displayProduct();
  }

  render() {
    let allImages = null;
    let iconStyle = null;
    let sizeOptions = null;
    let { images, name, brand, description, sizes, 
      dataLoaded, skus, hasSizes, quantity, userFave,
      productUrl } = this.state;
    let { history } = this.props;

    allImages = (
      images.map((image, i) => {
        let style = {
          backgroundSize: 'contain',
          backgroundImage: `url(${image.url})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top center'
        }
        return (
          <div className="misc-product-image" style={style} key={i} onClick={()=> this.handleClick(i)}></div>
        )
      })
    );

    sizeOptions = (
      hasSizes ? 
       (
          <select name="size" className="size">
            {sizes.map((mySize, idx) => {
              return ( <option value={`${mySize}`} key={idx}>{mySize.toUpperCase()}</option> )
            })}
          </select>
      ) :  (
          <select name="size" className="size" disabled="true">
            return ( <option value="0">None</option> )
          </select>
      )
    )

    iconStyle = userFave ? { color: 'red' } : { color: 'black' };
    
    if (dataLoaded) {
      return (
        <div className="product-container">
          <div className="product-images">
            {this.displayMainImage(this.state.count)}
            <div className="misc-product-image-list">
              {allImages}
            </div>
          </div>
          <div className="product-content">
            <h3>{brand}</h3>
            <h1>{name}</h1>
            <h6>{description}</h6>
            <div className="pricing">
              <p>${skus[0].sale_price}</p>
              <div className="selection">
                {sizeOptions}
              </div>
              <div className="quantity">
                <i className="far fa-plus-square fa-2x" onClick={this.handleAddQuantity}></i>
                <span>{quantity}</span>
                <i className="far fa-minus-square fa-2x" onClick={this.handleSubtractQuantity}></i>
              </div>
            </div>
            <div className="product_add_btns">
              <button className="add_to_faves" onClick={this.handleFaveClick}>
                ADD TO FAVORITES 
                <i className="fas fa-heart fa-2x" style={iconStyle}></i>
              </button>
              <button className="add_to_cart">
                <a target="_blank" href={`${productUrl}`}>ADD TO CART</a>
                <i className="fas fa-shopping-cart fa-2x"></i>
              </button>
              <button className="product-back-btn" onClick={history.goBack}>
                <i className="fas fa-arrow-circle-left fa-2x"></i>
                BACK
              </button>
            </div>
          </div>
        </div>
    )} else {
        return <h2>Loading...</h2>
    }
  }
}

export default withRouter(ProductLayout);
import React from 'react';
import PurchaseNowBtn from '../buttons/PurchaseNowBtn';
import './Cards.css';
import { Link } from 'react-router-dom';

const SquareCard = (props) => {
  let { data } = props;
  if ( data === undefined ) {
    return (
      <div className="square-card">
        <div>Loading...</div>
      </div>
    );
  } else {
    let image = data.image_urls['676x686'][0].url;
    let style = {
      backgroundSize: 'cover',
      backgroundImage: `url(${image})`
    }
    return (
      <div className="square-card" style={style}>
        <div className="square-card-overlay">
          <div className="square-card-content">
            <p>Men</p>
            <h2>{data.name}</h2>
            <br />
            <h4>{data.description}</h4>
            <br />
            <Link to={`${data.sale_key}`}>
              <PurchaseNowBtn />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default SquareCard;
import React from 'react';
import PurchaseNowBtn from '../buttons/PurchaseNowBtn';
import './Cards.css';
import { Link } from 'react-router-dom';

const StandardCard = (props) => {
  let { data } = props;
  //468x652
  let image = data.image_urls['468x652'][0].url;
  let bgImage = {
    backgroundSize: 'cover',
    backgroundImage: `url(${image})`
  }
  return (
    <div className="standard-card" style={bgImage}>
      <div className="standard-card-overlay">
        <div className="standard-card-container">
          <h1>
            <span>Men</span>
            <br />
            {data.name}
          </h1>
          <br />
          <h3>{data.description}</h3>
          <br />
          <Link to={data.sale_key}>
            <PurchaseNowBtn />
          </Link>
        </div>
      </div>
    </div>
  )
};

export default StandardCard;
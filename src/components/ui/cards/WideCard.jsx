import React from 'react';
import ExploreBtn from '../buttons/ExploreBtn';
import './Cards.css';
import { Link } from 'react-router-dom';

const WideCard = (props) => {
  let { data } = props;
  if (data === undefined) {
    return (
      <div className="wide-card-container">
        <div>Loading...</div>
      </div>
    )
  } else {
    let image = data.image_urls['940x652'][0].url;
    let style = {
      backgroundSize: 'cover',
      backgroundImage: `url(${image})`
    }
    return (
        <div className="wide-card-container" style={style}>
          <div className="wide-card-overlay">
            <h5>{data.name}<span>Men</span></h5>
            <br />
            <h6>{data.description}</h6>
            <div className="wide-card-more">
            <Link to={data.sale_key}>
              <ExploreBtn />
            </Link>
            </div>
          </div>
        </div>
    )
  }
};

export default WideCard;
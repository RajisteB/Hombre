import React from 'react';
import GetTheLookBtn from '../buttons/GetTheLookBtn';
import './Cards.css';
import { Link } from 'react-router-dom';

const LongHeroCard = (props) => {
  let { data } = props;
  let image = data.image_urls['468x652'][0].url;
  let style = {
    backgroundSize: 'cover',
    backgroundImage: `url(${image})`
  }
  return (
    <div className="long-hero-card" style={style}>
        <div className="long-hero-overlay">
          <div className="long-hero-content">
            <span>Men</span>
            <h1>{data.name}</h1>
            <br />
            <h3>{data.description}</h3>
          </div>
          <br />
          <div>
            <Link to={`${data.sale_key}`}>
              <GetTheLookBtn />
            </Link>
          </div>
        </div>
      </div>
  )
};

export default LongHeroCard;
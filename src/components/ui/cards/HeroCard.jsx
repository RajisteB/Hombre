import React, { Component } from 'react';
import ShopNowBtn from '../buttons/ShopNowBtn';
import SliderNavBtns from '../buttons/SliderNavBtns';
import { withRouter, Link } from 'react-router-dom';
import './Cards.css';

class HeroCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0
    }
  }

  displayBanner = () => {
    let { ends } = this.props;
    let { currentIndex } = this.state;

    if (currentIndex < (ends.length - 1)) {
      this.setState({
        currentIndex: currentIndex + 1
      })
    } else {
      this.setState({
        currentIndex: 0
      })
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.displayBanner();
    }, 5000);
  }

  render() {
    let { ends } = this.props;
    let { currentIndex } = this.state;
    let image = ends[currentIndex].image_urls['1264x1352'][0].url;
    let style = {
      backgroundSize: 'cover',
      backgroundImage: `url(${image})`
    }
  
  return (
    <div className="hero-card" style={style}>
      <div className="hero-overlay">
        <div className="hero-content-container">
          <div className="hero-content">
            <h1>{ends[currentIndex].name}</h1>
            <h4>{ends[currentIndex].description}</h4>
            {/* <h6>Sales Ends: {ends[currentIndex].ends}</h6> */}
            <div style={{ textAlign: 'center' }}>
              <Link to={`/${ends[currentIndex].sale_key}`} >
                <ShopNowBtn />
              </Link>
              {/* <SliderNavBtns /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )}
}

export default withRouter(HeroCard);
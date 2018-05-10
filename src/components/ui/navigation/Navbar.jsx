import './Navbar.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      visible: false
    }
  }

  handleVisibleClick = () => {
    console.log('clicked!');
    this.setState({ 
      visible: !this.state.visible
    })
  }

  render() {
    let navIcon = null;
    let navOverlay = null;
    let { visible } = this.state;

    if (visible) {
      navOverlay = (
        <div className="nav-burger-overlay">
          <span onClick={this.handleVisibleClick}>X</span>
          <div className="nav-overlay-search">
            <input type="text" placeholder="Search..." />
          </div>
          <div className="nav-overlay-links">
            <div className="icon">
              <i className="far fa-user fa-lg"></i>
              <span>Account</span>
            </div>
            <div className="icon">
              <i className="far fa-bell fa-lg"></i>
              <span>Alerts</span>
            </div>
            <div className="icon">
              <i className="far fa-heart fa-lg"></i>
              <span>Favorites</span>
            </div>
            <div className="icon cart">
              <i className="fas fa-shopping-cart fa-lg"></i>
              <span>Cart</span>
            </div>
          </div>
        </div>
      )
      // navIcon = (
      //   <div className="burger" onClick={this.handleVisibleClick}>
      //     <i className="fas fa-times fa-2x" style={{ color: 'white' }}></i>
      //   </div>
      // )
    } else {
      navIcon = (
        <div className="burger" onClick={this.handleVisibleClick}>
          <i className="fas fa-bars fa-2x" style={{ color: 'white' }}></i>
        </div>
      )
      navOverlay = null;
    }

    return (
      <div className="navbar">
        <div className="logo-block">
          <Link to={"/"} style={{ textDecoration: 'none' }}>
            <div className="logo">Hombre</div>
          </Link>
        </div>
        {navIcon}
        {navOverlay}
        {/* <div className="search">
          <input type="text" placeholder="Search..." />
        </div> */}
        <div className="links">
          <div className="icon">
            <i className="far fa-user fa-lg"></i>
          </div>
          <div className="icon">
            <i className="far fa-bell fa-lg"></i>
          </div>
          <div className="icon">
            <i className="far fa-heart fa-lg"></i>
          </div>
          <div className="icon cart">
            <i className="fas fa-shopping-cart fa-lg"></i>
            <span>Cart</span>
          </div>
        </div>
      </div>
    )
  }
  
};

export default Navbar;
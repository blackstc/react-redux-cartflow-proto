import React, { Component } from 'react';
require('../../style/Header.scss')

export default class Header extends Component {
  render() {
    return (
      <nav className="Header navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">
              <img alt="Brand" src="http://core0.staticworld.net/images/article/2015/01/sling-tv-logo-100538814-large.png" />
            </a>
          </div>
        </div>
      </nav>
    )
  }
}

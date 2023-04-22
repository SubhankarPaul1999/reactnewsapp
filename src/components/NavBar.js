import React, { Component } from 'react'
// import PropTypes from 'prop-types'

import {
  Link
} from "react-router-dom";
export class NavBar extends Component {


  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg " style={{backgroundColor: '#f8f9fa',boxShadow: '1px 1px 5px gray'}}>
           
          <div className="container-fluid">
          <Link class="navbar-brand" to="#">
      <img src="/news_icon.png" alt="Logo" width="42px" height="35px" class="d-inline-block align-text-top"/>
    </Link>
            <Link className="navbar-brand" to="/">NewsMonkey</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/business">Business</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/entertainment">Entertainment</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/general">General</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/health">Health</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/science">Science</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/sports">Sports</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/technology">Technology</Link>
                </li>

              </ul>

            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default NavBar

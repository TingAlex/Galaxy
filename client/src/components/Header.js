import React, { Component } from "react";
// import $ from "jquery";
import "materialize-css";
class Header extends Component {
  // constructor(props) {
  //   super(props);
  //   $(document).ready(function() {
  //     $(".parallax").parallax();
  //   });
  // }
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <div className="row">
            <div className="col m1">
              <a id="logo-container" href="/" className="brand-logo">
                Galaxy
              </a>
            </div>
            <div className="col m11">
              <ul className="hide-on-med-and-down">
                <li>
                  <a href="/explore">探索</a>
                </li>
                <li>
                  <a href="/picStore">图库</a>
                </li>
                <li className="right">
                  <a href="#">Login with Github</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
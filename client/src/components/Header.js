import React, { Component } from "react";
import { connect } from "react-redux";
// import $ from "jquery";
import "materialize-css";
class Header extends Component {
  // constructor(props) {
  //   super(props);
  //   $(document).ready(function() {
  //     $(".parallax").parallax();
  //   });
  // }
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li className="right">
            <a href="/auth/github">Login With Github</a>
          </li>
        );
      default:
        return [
          <li key="2" className="right">
            <a href="/api/logout">Logout</a>
          </li>,
          <li key="3" style={{ margin: "0 10px" }} className="right">
            Credits:{this.props.auth.credits}
          </li>,
          <li key="1" className="right">
            <a href="/user/album">{this.props.auth.userName}</a>
          </li>
        ];
    }
  }
  render() {
    console.log(this.props);

    return (
      <div className="header">
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
                  {this.renderContent()}
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}
export default connect(mapStateToProps)(Header);

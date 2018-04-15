import React, { Component } from "react";
// import $ from "jquery";
import "materialize-css";
class Footer extends Component {
  // constructor(props) {
  //   super(props);
  //   $(document).ready(function() {
  //     $(".parallax").parallax();
  //   });
  // }
  render() {
    return <footer className="page-footer teal">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">Galaxy Bio</h5>
              <p className="grey-text text-lighten-4">
                A connected way to explore Galaxy.
              </p>
            </div>
            <div className="col l3 offset-l3 s12">
              <h5 className="white-text">Settings</h5>
              <address>
                <strong>Ting</strong>
                <br /> SSDUT of DLUT<br /> Since 2018<br /> <abbr title="Phone">
                  Email:
                </abbr>
                10chongzheng@outlook.com
              </address>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            Made by <a className="brown-text text-lighten-3" href="http://tingalex.github.io">
              Chongzheng
            </a>
          </div>
        </div>
      </footer>;
  }
}

export default Footer;

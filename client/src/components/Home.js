import React, { Component } from "react";
import $ from "jquery";
import "materialize-css";
import Header from "./Header";
import Footer from "./Footer";
// import { Link } from "react-router-dom";
//TODO:动态获取图片和活动信息！
// import SurveyList from "./surveys/surveyList";
class Home extends Component {
  constructor(props) {
    super(props);
    $(document).ready(function() {
       $(".parallax").parallax();
    });
  }

  render() {
    return <div>
        <Header />
        <div id="index-banner" className="parallax-container">
          <div className="section no-pad-bot">
            <div className="container">
              <br />
              <br />
              <h1 className="header center teal-text text-lighten-2">
                Welcome to Galaxy!
              </h1>
              <div className="row center">
                <h5 className="header col s12 light">
                  这是一个面向高校学生的天文观测活动与资源分享平台。在这里你可以结交国内高校的朋友；发起或参与观测活动；免费或有偿分享你拍摄的照片。想知道
                  Galaxy 背后的故事？
                </h5>
              </div>
              <div className="row center">
                <a href="http://materializecss.com/getting-started.html" id="download-button" className="btn-large waves-effect waves-light teal lighten-1">
                  Get Started
                </a>
              </div>
              <br />
              <br />
            </div>
          </div>
          <div className="parallax">
            <img src="/images/background1.jpg" alt="Unsplashed background img 1" />
          </div>
        </div>

        <div>
          <div className="section">
            <nav>
              <div className="nav-wrapper">
                <div className="row">
                  <div className="col s12">
                    <a href="#!" className="breadcrumb">
                      Galaxy
                    </a>
                    <a href="#!" className="breadcrumb">
                      活动速递
                    </a>
                  </div>
                </div>
              </div>
            </nav>
            <div className="container">
              <div className="row">
                <div className="col s12 m4">
                  <div className="card sticky-action">
                    <div className="card-image waves-effect waves-block waves-light">
                      <img src="/images/background1.jpg" alt="" className="activator" />
                    </div>
                    <div className="card-content">
                      <span className="card-title activator grey-text text-darken-4">
                        血色蓝月<i className="material-icons right">
                          more_vert
                        </i>
                      </span>

                      <p>大连理工大学</p>
                    </div>

                    <div className="card-action">
                      <a href="#">详情</a>
                      <a href="#">分享</a>
                      <a href="#">忽略</a>
                    </div>
                    <div className="card-reveal">
                      <span className="card-title grey-text text-darken-4">
                        血色蓝月<i className="material-icons right">close</i>
                      </span>
                      <p>大连理工大学</p>
                      <p>3月22日 20：00</p>
                      <p>报名费：5G币</p>
                      <p>报名人数：100</p>
                    </div>
                  </div>
                </div>
                <div className="col s12 m4">
                  <div className="card sticky-action">
                    <div className="card-image waves-effect waves-block waves-light">
                      <img src="/images/background1.jpg" alt="" className="activator" />
                    </div>
                    <div className="card-content">
                      <span className="card-title activator grey-text text-darken-4">
                        血色蓝月<i className="material-icons right">
                          more_vert
                        </i>
                      </span>

                      <p>大连理工大学</p>
                    </div>

                    <div className="card-action">
                      <a href="#">详情</a>
                      <a href="#">分享</a>
                      <a href="#">忽略</a>
                    </div>
                    <div className="card-reveal">
                      <span className="card-title grey-text text-darken-4">
                        血色蓝月<i className="material-icons right">close</i>
                      </span>
                      <p>大连理工大学</p>
                      <p>3月22日 20：00</p>
                      <p>报名费：5G币</p>
                      <p>报名人数：100</p>
                    </div>
                  </div>
                </div>
                <div className="col s12 m4">
                  <div className="card sticky-action">
                    <div className="card-image waves-effect waves-block waves-light">
                      <img src="/images/background1.jpg" alt="" className="activator" />
                    </div>
                    <div className="card-content">
                      <span className="card-title activator grey-text text-darken-4">
                        血色蓝月<i className="material-icons right">
                          more_vert
                        </i>
                      </span>

                      <p>大连理工大学</p>
                    </div>

                    <div className="card-action">
                      <a href="#">详情</a>
                      <a href="#">分享</a>
                      <a href="#">忽略</a>
                    </div>
                    <div className="card-reveal">
                      <span className="card-title grey-text text-darken-4">
                        血色蓝月<i className="material-icons right">close</i>
                      </span>
                      <p>大连理工大学</p>
                      <p>3月22日 20：00</p>
                      <p>报名费：5G币</p>
                      <p>报名人数：100</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section">
            <nav>
              <div className="nav-wrapper">
                <div className="row">
                  <div className="col s12">
                    <a href="#!" className="breadcrumb">
                      Galaxy
                    </a>
                    <a href="#!" className="breadcrumb">
                      天地一瞬
                    </a>
                  </div>
                </div>
              </div>
            </nav>
            <div className="container">
              <div className="row">
                <div className="col s12 m4">
                  <div className="card">
                    <div className="card-image">
                      <img src="/images/background1.jpg" />

                      <a className="btn-floating halfway-fab waves-effect waves-light red">
                        <i className="material-icons">add</i>
                      </a>
                    </div>
                    <div className="card-content">
                      <span className="card-title">大工秋月</span>
                    </div>
                  </div>
                </div>
                <div className="col s12 m4">
                  <div className="card">
                    <div className="card-image">
                      <img src="/images/background1.jpg" />

                      <a className="btn-floating halfway-fab waves-effect waves-light red">
                        <i className="material-icons">add</i>
                      </a>
                    </div>
                    <div className="card-content">
                      <span className="card-title">大工秋月</span>
                    </div>
                  </div>
                </div>
                <div className="col s12 m4">
                  <div className="card">
                    <div className="card-image">
                      <img src="/images/background1.jpg" />

                      <a className="btn-floating halfway-fab waves-effect waves-light red">
                        <i className="material-icons">add</i>
                      </a>
                    </div>
                    <div className="card-content">
                      <span className="card-title">大工秋月</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>;
  }
}
export default Home;

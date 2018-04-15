import React, { Component } from "react";
import $ from "jquery";
import "materialize-css";
import Header from "./Header";
import Footer from "./Footer";
// import { Link } from "react-router-dom";
//TODO:动态获取图片和活动信息！
// import SurveyList from "./surveys/surveyList";
class Explore extends Component {
//   constructor(props) {
//     super(props);
//     $(document).ready(function() {
//       $(".parallax").parallax();
//     });
//   }

  render() {
    return <div>
        <Header />
        <div className="section">
          <div className="row container">
            <div className="col m12">
              <div className="card-panel choose">
                <div className="row valign-wrapper">
                  <div className="col m1">
                    <a href="#" className="chooseTitle teal-text">
                      时段
                    </a>
                  </div>
                  <div className="col m11 valign-wrapper">
                    <a href="#" className="btn teal white-text chooseOption">
                      全部
                    </a>
                    <a href="#" className="chooseOption">
                      今天
                    </a>
                    <a href="#" className="chooseOption">
                      明天
                    </a>
                    <a href="#" className="chooseOption">
                      本周
                    </a>
                    <a href="#" className="chooseOption">
                      本月
                    </a>
                  </div>
                </div>
                <div className="divider" />
                <br />
                <div className="row valign-wrapper">
                  <div className="col m1">
                    <a href="#" className="chooseTitle teal-text">
                      城市
                    </a>
                  </div>
                  <div className="col m11  valign-wrapper">
                    <a href="#" className="btn teal white-text chooseOption">
                      全部
                    </a>
                    <a href="#" className="chooseOption">
                      大连
                    </a>
                    <a href="#" className="chooseOption">
                      北京
                    </a>
                    <a href="#" className="chooseOption">
                      上海
                    </a>
                    <a href="#" className="chooseOption">
                      南京
                    </a>
                    <a href="#" className="chooseOption">
                      武汉
                    </a>
                    <a href="#" className="chooseOption">
                      重庆
                    </a>
                    <a href="#" className="chooseOption">
                      西安
                    </a>
                    <a href="#" className="chooseOption">
                      天津
                    </a>
                    <a href="#" className="chooseOption">
                      郑州
                    </a>
                  </div>
                </div>
                <div className="divider" />
                <br />
                <div className="row valign-wrapper">
                  <div className="col m1">
                    <a href="#" className="chooseTitle teal-text">
                      费用
                    </a>
                  </div>
                  <div className="col m11 valign-wrapper">
                    <a href="#" className="btn teal white-text chooseOption">
                      全部
                    </a>
                    <a href="#" className="chooseOption">
                      0~5
                    </a>
                    <a href="#" className="chooseOption">
                      6~10
                    </a>
                    <a href="#" className="chooseOption">
                      11~20
                    </a>
                    <a href="#" className="chooseOption">
                      21~30
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
        <ul className="pagination center-align">
          <li className="disabled">
            <a href="#!">
              <i className="material-icons">chevron_left</i>
            </a>
          </li>
          <li className="active">
            <a href="#!">1</a>
          </li>
          <li className="waves-effect">
            <a href="#!">2</a>
          </li>
          <li className="waves-effect">
            <a href="#!">3</a>
          </li>
          <li className="waves-effect">
            <a href="#!">4</a>
          </li>
          <li className="waves-effect">
            <a href="#!">5</a>
          </li>
          <li className="waves-effect">
            <a href="#!">
              <i className="material-icons">chevron_right</i>
            </a>
          </li>
        </ul>
        <br />
        <Footer />
      </div>;
  }
}
export default Explore;

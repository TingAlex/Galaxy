import React, { Component } from "react";
import $ from "jquery";
import "materialize-css";
import Header from "./Header";
import Footer from "./Footer";
// import { Link } from "react-router-dom";
//TODO:动态获取图片和活动信息！
// import SurveyList from "./surveys/surveyList";
class ActivityDetails extends Component {
  constructor(props) {
    super(props);
    $(document).ready(function() {
    $(".carousel").carousel();
    });
  }

  render() {
    return <div>
        <Header />
        <div class="main">
          <div className="row">
            <br />
            <div className="col s12 m7 carousel">
              <a className="carousel-item" href="#one!">
                <img src="/images/Person/PicOfPersonAlbum/headPic.jpg" />
              </a>
              <a className="carousel-item" href="#two!">
                <img src="/images/Person/PicOfPersonAlbum/headPic.jpg" />
              </a>
              <a className="carousel-item" href="#three!">
                <img src="/images/Person/PicOfPersonAlbum/headPic.jpg" />
              </a>
              <a className="carousel-item" href="#four!">
                <img src="/images/Person/PicOfPersonAlbum/headPic.jpg" />
              </a>
              <a className="carousel-item" href="#five!">
                <img src="/images/Person/PicOfPersonAlbum/headPic.jpg" />
              </a>
            </div>
            <div className="col s12 m4">
              <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                  <span className="card-title">血色蓝月</span>
                  <p>大连理工大学</p>
                  <p>负责人：姜小捷</p>
                  <p>2017.02.23 20:00</p>
                  <p>辽宁大连金州大连理工大学软件学院涌泉湖</p>
                  <p>入场券：10 G币</p>
                  <p>
                    <span className="toRight">上限：100人</span>已报名：70人
                  </p>
                  <div className="progress">
                    <div className="determinate" style={{ width: 70 + "%" }} />
                  </div>
                  <div className="card-action">
                    <a href="#">报名</a>
                    <a href="#">分享</a>
                    <a href="#">忽略</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col s12 m6 center-align">
              <div className="btn col m12">详情</div>
              <br />
              <blockquote>
                <p className="left-align">
                  欢迎来到大连理工大学软件学院！
                  <br />
                  大工软院坐落在美丽的大黑山脚下，这里远离光污染的市区，并且雾霾也很小，是赏月的绝佳地点。软院的涌泉湖广阔无垠，清澈见底，能倒映出非常漂亮的月亮。
                  <br />
                  我们连续 3 年举办这样的赏月活动，每次都会有很多照片作品被国家地理杂志社选中。希望这里能给你带来美好的回忆！
                </p>
              </blockquote>
            </div>
            <div className="col s12 m6 center-align">
              <div className="btn col m12">问答</div>
              <br />
              <blockquote>
                <ul className="collapsible col m12">
                  <li>
                    <div className="collapsible-header">
                      <i className="material-icons">question_answer</i>报名费用都涵盖哪些方面？
                    </div>
                    <div className="collapsible-body left-align">
                      <span>
                        包括签证费用，环境保护费用，版权费用等等，不包括食宿。
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="collapsible-header">
                      <i className="material-icons">question_answer</i>大致的活动时长是？
                    </div>
                    <div className="collapsible-body left-align">
                      <span>
                        活动时间在2~3小时之间，不会太晚耽误大家休息的。
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="collapsible-header">
                      <i className="material-icons">question_answer</i>周围有哪些合适的旅店推荐？
                    </div>
                    <div className="collapsible-body left-align">
                      <span>当然是 8 号主题宾馆啦~</span>
                    </div>
                  </li>
                </ul>
              </blockquote>
            </div>
          </div>
        </div>
        <Footer />
      </div>;
  }
}
export default ActivityDetails;

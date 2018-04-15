import React, { Component } from "react";
import $ from "jquery";
import "materialize-css";
import Header from "./Header";
import Footer from "./Footer";
// import { Link } from "react-router-dom";
//TODO:动态获取图片和活动信息！
// import SurveyList from "./surveys/surveyList";
class MoreInfo extends Component {
  constructor(props) {
    super(props);
    $(document).ready(function() {
      $(".parallax").parallax();
      $(".datepicker").datepicker();
    });
  }

  render() {
    return (
      <div>
        <Header />
<div className="main">
    <div id="index-bannerForMoreInfo" className="parallax-container">
        <div className="section no-pad-bot">
            <div className="container">
                <div className="row valign-wrapper">
                    <div className="col s12 m6">
                        <br/><br/>
                        <h1 className="header center teal-text text-lighten-2">Welcome to Galaxy!</h1>
                        <div className="row center">
                            <h5 className="header col s12 light">
                                这是一个面向高校学生的天文观测活动与资源分享平台。在这里你可以结交国内高校的朋友；发起或参与观测活动；免费或有偿分享你拍摄的照片。想知道背后的故事？</h5>
                        </div>
                        <div className="row center">
                            <a href="http://materializecss.com/getting-started.html" id="download-button"
                               className="btn-large waves-effect waves-light teal lighten-1">Get Started</a>
                        </div>
                        <br/><br/>
                    </div>
                    <div className="col s12 m6">
                        <br/><br/>
                        <div className="card blue-grey darken-1">
                            <div className="card-content white-text">
                                <span className="card-title">Wait A Minute...</span>
                                <p>在为您准备好定制化的内容之前，Galaxy需要了解更多关于你的信息：</p>
                                    <br/>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <i className="material-icons prefix">textsms</i>
                                        <input type="text" id="autocomplete-input" className="autocomplete"/>

                                        <label for="autocomplete-input">大学</label>

                                    </div>
                                    <div className="input-field col s12 colorDataPicker">
                                        <i className="material-icons prefix">textsms</i>
                                        <input type="text" className="datepicker" id="date-pick"/>
                                        <label for="date-pick">生日</label>
                                    </div>
                                    <div className="row">
                                        <div className="col m3 offset-m3">
                                            <label>
                                                <input name="group1" type="radio" checked/>
                                                <span>男</span>
                                            </label>
                                        </div>
                                        <div className="col m3 offset-m1">
                                            <label>
                                                <input name="group1" type="radio"/>
                                                <span>女</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-action">
                                <a href="#">回到首页</a>
                                <div className="right-align"><a href="#">完成提交</a></div>
                            </div>
                        </div>
                        <br/><br/>
                    </div>
                </div>


            </div>
        </div>
        <div className="parallax"><img src="/images/Home/background1.jpg" alt="Unsplashed background img 1"/></div>
    </div>
</div>
        <Footer />
      </div>
    );
  }
}
export default MoreInfo;

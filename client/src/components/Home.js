import React from "react";
// import { Link } from "react-router-dom";
//TODO:动态获取图片和活动信息！
// import SurveyList from "./surveys/surveyList";
const Home = () => {
  return (
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
            <a
              href="http://materializecss.com/getting-started.html"
              id="download-button"
              className="btn-large waves-effect waves-light teal lighten-1"
            >
              Get Started
            </a>
          </div>
          <br />
          <br />
        </div>
      </div>
      <div className="parallax">
        <img
          src="../image/Home/background1.jpg"
          alt="Unsplashed background img 1"
        />
      </div>
    </div>
  );
};
export default Home;

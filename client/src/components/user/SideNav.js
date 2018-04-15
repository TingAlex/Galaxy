import React, { Component } from "react";
import $ from "jquery";
import "materialize-css";
// import { Link } from "react-router-dom";
//TODO:动态获取图片和活动信息！
// import SurveyList from "./surveys/surveyList";
class SideNav extends Component {
  constructor(props) {
    super(props);
    $(document).ready(function() {
      $(".sidenav").sideNav();
    });
  }

  render() {
    return <div className="row center">
        <button className="btn waves-effect waves-light" href="/user/album">
          我的图库
        </button>

        <button className="btn waves-effect waves-light" href="/user/uploadPic">
          上传图片
        </button>

        <button className="btn waves-effect waves-light" href="/user/raiseActivity">
          发起活动
        </button>

        <button className="btn waves-effect waves-light" href="/user/ownActivity">
          我的主办
        </button>

        <button className="btn waves-effect waves-light" href="/user/activity">
          我的参与
        </button>

        <button className="btn waves-effect waves-light" href="/user/info">
          个人资料
        </button>

        <button className="btn waves-effect waves-light" href="/user/cashFlow">
          账目记录
        </button>
      </div>;
  }
}
export default SideNav;

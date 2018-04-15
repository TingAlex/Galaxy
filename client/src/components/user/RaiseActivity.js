import React, { Component } from "react";
import $ from "jquery";
import "materialize-css";
import Header from "../Header";
import Footer from "../Footer";
import SideNav from "./SideNav";
class RaiseActivity extends Component {
  constructor(props) {
    super(props);
    $(document).ready(function() {
      //   $(".datepicker").datepicker();
      //   $(".timepicker").timepicker();
      $(".carousel").carousel();
    });
  }
  render() {
    return (
      <div className="workshop">
        <Header />
        <SideNav />
        <div className="main">
    <div className="row">
        <br/>
        <div className="col s12 carousel">
            <a className="carousel-item" href="#one!"><img src="/images/Person/PicOfPersonAlbum/headPic.jpg"/></a>
            <a className="carousel-item" href="#two!"><img src="/images/Person/PicOfPersonAlbum/headPic.jpg"/></a>
            <a className="carousel-item" href="#three!"><img src="/images/Person/PicOfPersonAlbum/headPic.jpg"/></a>
            <a className="carousel-item" href="#four!"><img src="/images/Person/PicOfPersonAlbum/headPic.jpg"/></a>
            <a className="carousel-item" href="#five!"><img src="/images/Person/PicOfPersonAlbum/headPic.jpg"/></a>
        </div>
        <form className="col s12">
            <div className="row">
                <div className="input-field col m2">
                    <input id="price" type="text" className="validate"/>
                    <label for="price">价格</label>
                    <br/>
                </div>
                <div className="col m5 file-field input-field">
                    <div className="btn">
                        <span>File</span>
                        <input type="file" multiple/>
                    </div>
                    <div className="file-path-wrapper">
                        <input className="file-path validate" type="text" placeholder="Upload one or more pics"/>
                    </div>
                </div>
                <div className="input-field col m3">
                    <input type="text" className="datepicker" id="date-pick"/>
                    <label for="date-pick">活动日期</label>
                </div>
                <div className="input-field col s12 m2 right-align">
                    <button className="btn waves-effect waves-light" type="submit" name="action">发起
                        <i className="material-icons right">send</i>
                    </button>
                </div>
            </div>

            <div className="row">
                <div className="input-field col s6">
                    <input id="title" type="text" className="validate"/>
                    <label for="title">标题</label>
                </div>
                <div className="input-field col s3">
                    <input id="lunch-time" type="text" className="timepicker"/>
                    <label for="lunch-time">开始时间</label>
                </div>
                <div className="input-field col s3">
                    <input id="end-time" type="text" className="timepicker"/>
                    <label for="end-time">结束时间</label>
                </div>


            </div>

            <div className="row">
                <div className="input-field col s12">
                    <input id="location" type="text" className="validate"/>
                    <label for="location">地点</label>
                </div>
            </div>

            <div className="row">
                <div className="input-field col s12">
                    <textarea id="description" className="materialize-textarea" data-length="200"></textarea>
                    <label for="description">描述</label>
                </div>
            </div>
        </form>
    </div>
</div>
        <Footer />
      </div>
    );
  }
}

export default RaiseActivity;

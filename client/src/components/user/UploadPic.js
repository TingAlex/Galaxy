import React, { Component } from "react";
import $ from "jquery";
import "materialize-css";
import Header from "../Header";
import Footer from "../Footer";
import SideNav from "./SideNav";
class Activity extends Component {
  constructor(props) {
    super(props);
    $(document).ready(function() {
    //   $(".datepicker").datepicker();
    //   $(".timepicker").timepicker();
    });
  }
  render() {
    return (
      <div className="workshop">
        <Header />
        <SideNav />
       <div class="main">
    <div className="row">
        <br/>

        <form className="col s12 m6">
            <div className="row">
               
                <div className="input-field col s6">
                    <div className="switch">
                        <label>
                            私密
                            <input type="checkbox"/>
                            <span className="lever"></span>
                            公开
                        </label>
                    </div>
                </div>
                <div className="input-field col s6 right-align">
                    <button className="btn waves-effect waves-light" type="submit" name="action">上传
                        <i className="material-icons right">send</i>
                    </button>
                </div>
            </div>
        
            <div className="row">
                <div className="input-field col m4">
                    <input id="price" type="text" className="validate"/>
                    <label for="price">价格</label>
                    <br/>
                </div>

                <div className="col m8 file-field input-field">
                    <div className="btn">
                        <span>File</span>
                        <input type="file"/>
                    </div>
                    <div className="file-path-wrapper">
                        <input className="file-path validate" type="text" placeholder="Upload one pic"/>
                    </div>
                </div>

            </div>
        
            <div className="row">
                <div className="input-field col s6">
                    <input type="text" className="datepicker" id="date-pick"/>
                    <label for="date-pick">拍摄日期</label>
                </div>
                <div className="input-field col s6">
                    <input id="lunch-time" type="text" className="timepicker"/>
                    <label for="lunch-time">拍摄时间</label>
                </div>
            </div>
         
            <div className="row">
                <div className="input-field col s12">
                    <input id="title" type="text" className="validate"/>
                    <label for="title">标题</label>
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
                    <textarea id="description" className="materialize-textarea" data-length="50"></textarea>
                    <label for="description">描述</label>
                </div>
            </div>
        </form>
        <div className="col s12 m6 center-align ">
            <img src="/images/Person/PicOfPersonAlbum/headPic.jpg" alt="" className="responsive-img z-depth-4"/>
        </div>

    </div>
</div>
        <Footer />
      </div>
    );
  }
}

export default Activity;

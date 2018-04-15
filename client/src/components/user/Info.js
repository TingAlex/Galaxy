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
                    <button className="btn waves-effect waves-light" type="submit" name="action">还原
                        <i className="material-icons right">autorenew</i>
                    </button>
                </div>
                <div className="input-field col s6 right-align">
                    <button className="btn waves-effect waves-light" type="submit" name="action">修改
                        <i className="material-icons right">check</i>
                    </button>
                </div>
            </div>

            <div className="row">
                <div className="col m6 file-field input-field">
                    <div className="btn">
                        <span>File</span>
                        <input type="file"/>
                    </div>
                    <div className="file-path-wrapper">
                        <input className="file-path validate" type="text" placeholder="Upload head pic"/>
                    </div>
                </div>

                <div className="col m6 file-field input-field">
                    <div className="btn">
                        <span>File</span>
                        <input type="file"/>
                    </div>
                    <div className="file-path-wrapper">
                        <input className="file-path validate" type="text" placeholder="Upload back pic"/>
                    </div>
                </div>

                <div className="input-field col m12">
                    <i className="material-icons prefix">textsms</i>
                    <input type="text" id="autocomplete-input" className="autocomplete"/>

                    <label for="autocomplete-input">大学</label>

                </div>
                
                <div className="input-field col m12">
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

        </form>
        <div className="col s12 m4 offset-m1 center-align ">
            <div className="row">
                <div className="col m8 offset-m2">
                    <div className="btn col m12">Head</div>
                    <br/>
                    <img src="/images/Person/PicOfPersonAlbum/headPic.jpg" alt="" className="responsive-img z-depth-4"/>
                </div>
            </div>

            <div className="row">
                <div className="col m8 offset-m2">
                    <div className="btn col m12">Background</div>
                    <br/>
                    <img src="/images/Person/PicOfPersonAlbum/headPic.jpg" alt="" className="responsive-img z-depth-4"/>
                </div>
            </div>
        </div>

    </div>
</div>
        <Footer />
      </div>
    );
  }
}

export default Activity;

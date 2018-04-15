import React, { Component } from "react";
import $ from "jquery";
import "materialize-css";
import Header from "../Header";
import Footer from "../Footer";
import SideNav from "./SideNav";
class OwnActivity extends Component {
  constructor(props) {
    super(props);
    $(document).ready(function() {
      $(".collapsible").collapsible();
      $(".dropdown-trigger").dropdown();
    });
  }
  render() {
    return (
      <div className="workshop">
        <Header />
        <SideNav />
        <div className="main">
          <div className="row">
            <br />
            <div className="col m8">
              <div className="section" id="2018-12">
                <nav>
                  <div className="nav-wrapper">
                    <div className="col s12">
                      <a href="#!" className="breadcrumb">
                        2018
                      </a>
                      <a href="#!" className="breadcrumb">
                        12
                      </a>
                    </div>
                  </div>
                </nav>
                <ul className="collapsible popout">
                  <li>
                    <div className="collapsible-header">
                      <div className="col m7 valign-wrapper">
                        <i className="material-icons">arrow_upward</i>大连理工大学
                      </div>
                      <div className="col m5 valign-wrapper">
                        2018.12.03 20:00~22:00
                      </div>
                    </div>
                    <div className="collapsible-body">
                      <ul>
                        <li
                          className="dropdown-trigger btn-small right"
                          href="#"
                          data-target="dropdown1"
                        >
                          操作
                        </li>
                        <ul id="dropdown1" className="dropdown-content">
                          <li>
                            <a href="#!" className="center-align disabled">
                              详情
                            </a>
                          </li>
                          <li>
                            <a href="#!" className="center-align">
                              退出
                            </a>
                          </li>
                          <li>
                            <a href="#!" className="center-align">
                              删除
                            </a>
                          </li>
                        </ul>
                        <li>血色蓝月</li>
                        <li>大连理工大学</li>
                        <li>负责人：姜小捷</li>
                        <li>辽宁大连金州大连理工大学软件学院涌泉湖</li>
                        <li>入场券：10 G币</li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className="collapsible-header">
                      <div className="col m7 valign-wrapper">
                        <i className="material-icons">all_inclusive</i>大连理工大学
                      </div>
                      <div className="col m5 valign-wrapper">
                        2018.12.03 20:00~22:00
                      </div>
                    </div>
                    <div className="collapsible-body">
                      <ul>
                        <li
                          className="dropdown-trigger btn-small right"
                          href="#"
                          data-target="dropdown2"
                        >
                          操作
                        </li>
                        <ul id="dropdown2" className="dropdown-content">
                          <li>
                            <a href="#!" className="center-align disabled">
                              详情
                            </a>
                          </li>
                          <li>
                            <a href="#!" className="center-align">
                              退出
                            </a>
                          </li>
                          <li>
                            <a href="#!" className="center-align">
                              删除
                            </a>
                          </li>
                        </ul>
                        <li>血色蓝月</li>
                        <li>大连理工大学</li>
                        <li>负责人：姜小捷</li>
                        <li>辽宁大连金州大连理工大学软件学院涌泉湖</li>
                        <li>入场券：10 G币</li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className="collapsible-header">
                      <div className="col m7 valign-wrapper">
                        <i className="material-icons">check</i>大连理工大学
                      </div>
                      <div className="col m5 valign-wrapper">
                        2018.12.03 20:00~22:00
                      </div>
                    </div>
                    <div className="collapsible-body">
                      <ul>
                        <li
                          className="dropdown-trigger btn-small right"
                          href="#"
                          data-target="dropdown3"
                        >
                          操作
                        </li>
                        <ul id="dropdown3" className="dropdown-content">
                          <li>
                            <a href="#!" className="center-align disabled">
                              详情
                            </a>
                          </li>
                          <li>
                            <a href="#!" className="center-align">
                              退出
                            </a>
                          </li>
                          <li>
                            <a href="#!" className="center-align">
                              删除
                            </a>
                          </li>
                        </ul>
                        <li>血色蓝月</li>
                        <li>大连理工大学</li>
                        <li>负责人：姜小捷</li>
                        <li>辽宁大连金州大连理工大学软件学院涌泉湖</li>
                        <li>入场券：10 G币</li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="section" id="2018-11">
                <nav>
                  <div className="nav-wrapper">
                    <div className="col s12">
                      <a href="#!" className="breadcrumb">
                        2018
                      </a>
                      <a href="#!" className="breadcrumb">
                        11
                      </a>
                    </div>
                  </div>
                </nav>
                <ul className="collapsible popout">
                  <li>
                    <div className="collapsible-header">
                      <div className="col m7 valign-wrapper">
                        <i className="material-icons">check</i>大连理工大学
                      </div>
                      <div className="col m5 valign-wrapper">
                        2018.12.03 20:00~22:00
                      </div>
                    </div>
                    <div className="collapsible-body">
                      <ul>
                        <li
                          className="dropdown-trigger btn-small right"
                          href="#"
                          data-target="dropdown4"
                        >
                          操作
                        </li>
                        <ul id="dropdown4" className="dropdown-content">
                          <li>
                            <a href="#!" className="center-align disabled">
                              详情
                            </a>
                          </li>
                          <li>
                            <a href="#!" className="center-align">
                              退出
                            </a>
                          </li>
                          <li>
                            <a href="#!" className="center-align">
                              删除
                            </a>
                          </li>
                        </ul>
                        <li>血色蓝月</li>
                        <li>大连理工大学</li>
                        <li>负责人：姜小捷</li>
                        <li>辽宁大连金州大连理工大学软件学院涌泉湖</li>
                        <li>入场券：10 G币</li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className="collapsible-header">
                      <div className="col m7 valign-wrapper">
                        <i className="material-icons">check</i>大连理工大学
                      </div>
                      <div className="col m5 valign-wrapper">
                        2018.12.03 20:00~22:00
                      </div>
                    </div>
                    <div className="collapsible-body">
                      <ul>
                        <li
                          className="dropdown-trigger btn-small right"
                          href="#"
                          data-target="dropdown5"
                        >
                          操作
                        </li>
                        <ul id="dropdown5" className="dropdown-content">
                          <li>
                            <a href="#!" className="center-align disabled">
                              详情
                            </a>
                          </li>
                          <li>
                            <a href="#!" className="center-align">
                              退出
                            </a>
                          </li>
                          <li>
                            <a href="#!" className="center-align">
                              删除
                            </a>
                          </li>
                        </ul>
                        <li>血色蓝月</li>
                        <li>大连理工大学</li>
                        <li>负责人：姜小捷</li>
                        <li>辽宁大连金州大连理工大学软件学院涌泉湖</li>
                        <li>入场券：10 G币</li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className="collapsible-header">
                      <div className="col m7 valign-wrapper">
                        <i className="material-icons">check</i>大连理工大学
                      </div>
                      <div className="col m5 valign-wrapper">
                        2018.12.03 20:00~22:00
                      </div>
                    </div>
                    <div className="collapsible-body">
                      <ul>
                        <li
                          className="dropdown-trigger btn-small right"
                          href="#"
                          data-target="dropdown6"
                        >
                          操作
                        </li>
                        <ul id="dropdown6" className="dropdown-content">
                          <li>
                            <a href="#!" className="center-align disabled">
                              详情
                            </a>
                          </li>
                          <li>
                            <a href="#!" className="center-align">
                              退出
                            </a>
                          </li>
                          <li>
                            <a href="#!" className="center-align">
                              删除
                            </a>
                          </li>
                        </ul>
                        <li>血色蓝月</li>
                        <li>大连理工大学</li>
                        <li>负责人：姜小捷</li>
                        <li>辽宁大连金州大连理工大学软件学院涌泉湖</li>
                        <li>入场券：10 G币</li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="section" id="2018-10">
                <nav>
                  <div className="nav-wrapper">
                    <div className="col s12">
                      <a href="#!" className="breadcrumb">
                        2018
                      </a>
                      <a href="#!" className="breadcrumb">
                        10
                      </a>
                    </div>
                  </div>
                </nav>
                <ul className="collapsible popout">
                  <li>
                    <div className="collapsible-header">
                      <div className="col m7 valign-wrapper">
                        <i className="material-icons">check</i>大连理工大学
                      </div>
                      <div className="col m5 valign-wrapper">
                        2018.12.03 20:00~22:00
                      </div>
                    </div>
                    <div className="collapsible-body">
                      <ul>
                        <li
                          className="dropdown-trigger btn-small right"
                          href="#"
                          data-target="dropdown7"
                        >
                          操作
                        </li>
                        <ul id="dropdown7" className="dropdown-content">
                          <li>
                            <a href="#!" className="center-align disabled">
                              详情
                            </a>
                          </li>
                          <li>
                            <a href="#!" className="center-align">
                              退出
                            </a>
                          </li>
                          <li>
                            <a href="#!" className="center-align">
                              删除
                            </a>
                          </li>
                        </ul>
                        <li>血色蓝月</li>
                        <li>大连理工大学</li>
                        <li>负责人：姜小捷</li>
                        <li>辽宁大连金州大连理工大学软件学院涌泉湖</li>
                        <li>入场券：10 G币</li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className="collapsible-header">
                      <div className="col m7 valign-wrapper">
                        <i className="material-icons">check</i>大连理工大学
                      </div>
                      <div className="col m5 valign-wrapper">
                        2018.12.03 20:00~22:00
                      </div>
                    </div>
                    <div className="collapsible-body">
                      <ul>
                        <li
                          className="dropdown-trigger btn-small right"
                          href="#"
                          data-target="dropdown8"
                        >
                          操作
                        </li>
                        <ul id="dropdown8" className="dropdown-content">
                          <li>
                            <a href="#!" className="center-align disabled">
                              详情
                            </a>
                          </li>
                          <li>
                            <a href="#!" className="center-align">
                              退出
                            </a>
                          </li>

                          <li>
                            <a href="#!" className="center-align">
                              删除
                            </a>
                          </li>
                        </ul>
                        <li>血色蓝月</li>
                        <li>大连理工大学</li>
                        <li>负责人：姜小捷</li>
                        <li>辽宁大连金州大连理工大学软件学院涌泉湖</li>
                        <li>入场券：10 G币</li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className="collapsible-header">
                      <div className="col m7 valign-wrapper">
                        <i className="material-icons">check</i>大连理工大学
                      </div>
                      <div className="col m5 valign-wrapper">
                        2018.12.03 20:00~22:00
                      </div>
                    </div>
                    <div className="collapsible-body">
                      <ul>
                        <li
                          className="dropdown-trigger btn-small right"
                          href="#"
                          data-target="dropdown9"
                        >
                          操作
                        </li>

                        <ul id="dropdown9" className="dropdown-content">
                          <li>
                            <a href="#!" className="center-align disabled">
                              详情
                            </a>
                          </li>
                          <li>
                            <a href="#!" className="center-align">
                              退出
                            </a>
                          </li>

                          <li>
                            <a href="#!" className="center-align">
                              删除
                            </a>
                          </li>
                        </ul>
                        <li>血色蓝月</li>
                        <li>大连理工大学</li>
                        <li>负责人：姜小捷</li>
                        <li>辽宁大连金州大连理工大学软件学院涌泉湖</li>
                        <li>入场券：10 G币</li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col hide-on-small-only offset-m8 m3 center-align pinned">
              <ul className="section table-of-contents">
                <li>
                  <a href="#2018-12"> 2018-12</a>
                </li>
                <li>
                  <a href="#2018-11">2018-11</a>
                </li>
                <li>
                  <a href="#2018-10">2018-10</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default OwnActivity;

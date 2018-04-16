import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
//有helper，帮助你在dom之间导航
//BrowserRouter 是react-router的大脑，指导router根据你当前的url去改变components
//Route 是react 组件，用于在特定route之间建立规则
import { connect } from "react-redux";
import * as actions from "../actions";
import Album from "./user/Album";
import Home from "./Home";

import Explore from "./Explore";
import PicStore from "./PicStore";
import Activity from "./user/Activity";
import UploadPic from "./user/UploadPic";
import RaiseActivity from "./user/RaiseActivity";
import OwnActivity from "./user/OwnActivity";
import Info from "./user/Info";
import MoreInfo from "./MoreInfo";
import ActivityDetails from "./ActivityDetails";
// const Header = () => <h2>Navigation Header</h2>;
const DashBoard = () => <h2>DashBoard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;

// const Home = () => <h2>Home</h2>;
// const Explore = () => <h2>Explore</h2>;
// const PicStore = () => <h2>PicStore</h2>;

// const Activity = () => <h2>Activity</h2>;

// const Album = () => <h2>Album</h2>;
const CashFlow = () => <h2>CashFlow</h2>;
// const Info = () => <h2>Info</h2>;
// const OwnActivity = () => <h2>OwnActivity</h2>;
// const RaiseActivity = () => <h2>RaiseActivity</h2>;
// const UploadPic = () => <h2>Upload</h2>;

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/surveys" component={DashBoard} />
            <Route exact path="/surveys/new" component={SurveyNew} />

            <Route exact path="/explore" component={Explore} />
            <Route exact path="/picstore" component={PicStore} />

            <Route exact path="/user/activity" component={Activity} />
            <Route exact path="/user/album" component={Album} />
            <Route exact path="/user/cashFlow" component={CashFlow} />
            <Route exact path="/user/info" component={Info} />
            <Route exact path="/user/ownActivity" component={OwnActivity} />
            <Route exact path="/user/raiseActivity" component={RaiseActivity} />
            <Route exact path="/user/uploadPic" component={UploadPic} />
            <Route exact path="/moreInfo" component={MoreInfo} />
            <Route exact path="/activityDetails" component={ActivityDetails} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);

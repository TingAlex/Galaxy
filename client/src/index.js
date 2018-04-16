import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
//Provider 帮助我们把二者联系在一起
import { Provider } from "react-redux";
//createStore能够帮助创建一个redux store的实例
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import "materialize-css/dist/css/materialize.min.css";
// import "materialize-css/dist/js/materialize.min.js";
import  "materialize-css";
// import M from "materialize-css";
import App from "./components/App";
import reducers from "./reducers";
// import { DatePicker } from "materialize-css";
//下面第一个参数是reducer，这里先简单放一个返回空数组的占位置
//第二个参数是state，我们初始化，没有默认的state要设置
//第三个参数是中间件，我们回头会把redux-thunk放在这里
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));
//需要把provider设置为父容器，这样里面的元素都能获取到信息
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root"),function(){
  }
);

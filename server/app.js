// 引入模块
const express=require("express");
const bodyParser=require("body-parser");
const querystring=require("querystring");

// 创建web服务器
const appServer=express();
appServer.listen(3000);
appServer.use(express.static("public"));

// 用body中间件,将post请求的数据格式化为对象
appServer.use(bodyParser.urlencoded({
  extended:false
}));
// 引入路由
var index=require("./router/index");
// 使用路由
appServer.use('/index',index);
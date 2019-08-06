/* 引入模块 */
const express=require('express');
const cors=require('cors');

/* 创建服务及监听端口 */
var server=express().listen(80);

/* 静态挂载 */
server.use(express.static('public'));


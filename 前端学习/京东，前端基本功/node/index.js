/**
 * Created by s7379829 on 2018/5/30.
 */
    //可以用来创建一个服务器
var http = require('http');
//创建一个服务
var server= http.createServer(function(request,response){
    //只要有客户端请求来了就执行这个函数
    console.log(request.url);
 //处理请求和响应
    //写响应头
    response.writeHead(200, {'content-type':'text.html','key1':'value1'});
    //写响应体，只能是字符串
    response.write('<h1>hahaha<h1>');
    response.end();
});
//启动服务
server.listen(8080,function(error){
    console.log('成功监听8080端口');
});

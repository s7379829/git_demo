/**
 * Created by s7379829 on 2018/5/31.
 */
//可以用来创建一个服务器
var http = require('http');
//创建一个服务
var server= http.createServer(function(request,response){
    var requestUrl = request.url;
    switch (requestUrl){
        case '/signin':
            //请求登入页面
            signin(request,response);
            break;
        case  '/post':
            //提交表单
            post( request,response);

            break;
        default:
            response.writeHead(404,{});
            response.end();
            break;
    }
});
//启动服务
server.listen(8080,function(error){
    console.log('成功监听8080端口');
});

function  signin(request,response){
    console.log("请求登入");
    response.write('<!DOCTYPE html>')
    response.write(' <html lang="en">')
    response.write('   <head>')
    response.write('    <meta charset="UTF-8">')
    response.write('   <title>Title</title>')
    response.write('   </head>')
    response.write('    <body>')
    response.write('   <form action="/post" method="post">')
    response.write('    用户名：<input type="text"> <br>')
    response.write('   密码：<input type="password"><br>')
    response.write('    <input type="button" value="登入">')
    response.write('    <input type="button" value="注册">')
    response.write('    </form>')

    response.write('   </body>')
    response.write('    </html>')


}
function  post(request,response){
    console.log("提交表单");
}

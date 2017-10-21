var http = require('http'),    //服务器创建
    dns  = require('dns'),      //DNS查询
    fs   = require('fs'),        //文本操作
    url = require('url'),       //url处理
    querystring = require("querystring");  //字符串处理
http.createServer(function(req,res){
  /**写http head 返回html  因此Content－Type 为html*/
  res.writeHead(200,{'Content-Type':'text/html'});
  /*获取当前index.html的路径*/
  var readPath = _dirname + '/'+url.parse('index.html').pathname;
  var indexPage = fs.readFileSync(readPath);
  res.end(indexPage);
}).listen(3000,"127.0.0.1");

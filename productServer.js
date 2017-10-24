var PORT = 8080;

var http = require('http');
var url=require('url');
var fs=require('fs');
var os=require('os');
var mine={
  "css": "text/css",
  "gif": "image/gif",
  "html": "text/html",
  "ico": "image/x-icon",
  "jpeg": "image/jpeg",
  "jpg": "image/jpeg",
  "js": "text/javascript",
  "json": "application/json",
  "pdf": "application/pdf",
  "png": "image/png",
  "svg": "image/svg+xml",
  "swf": "application/x-shockwave-flash",
  "tiff": "image/tiff",
  "txt": "text/plain",
  "wav": "audio/x-wav",
  "wma": "audio/x-ms-wma",
  "wmv": "video/x-ms-wmv",
  "xml": "text/xml"
};
var path=require('path');

var server = http.createServer(function (request, response) {


    var pathname = url.parse(request.url).pathname;
    pathname = pathname == '/' ? "index.html" : pathname;
    var realPath = path.join("./dist", pathname);
    var ext = path.extname(realPath);
    ext = ext ? ext.slice(1) : 'unknown';
    fs.exists(realPath, function (exists) {
        if (!exists) {
            response.writeHead(404, {
                'Content-Type': 'text/plain'
            });

            response.write("This request URL " + pathname + " was not found on this server.");
            response.end();
        } else {
            fs.readFile(realPath, "binary", function (err, file) {
                if (err) {
                    response.writeHead(500, {
                        'Content-Type': 'text/plain'
                    });
                    response.end(err);
                } else {
                    var contentType = mine[ext] || "text/plain";
                    response.writeHead(200, {
                        'Content-Type': contentType
                    });
                    response.write(file, "binary");
                    response.end();
                }
            });
        }
    });
});

function getIPv4(){ 
var interfaces = os.networkInterfaces();//获取网络接口列表 
var ipv4s = [];//同一接口可能有不止一个IP4v地址，所以用数组存

Object.keys(interfaces).forEach(function (key){
    interfaces[key].forEach(function (item){

        //跳过IPv6 和 '127.0.0.1'
        if ( 'IPv4' !== item.family || item.internal !== false )return;

        ipv4s.push(item.address);//可用的ipv4s加入数组
        console.log(key+'--'+item.address);
    })        
})

return ipv4s[0];//返回一个可用的即可
} 


server.listen(PORT, function (){ 
console.log("server start on: "+getIPv4()+":" + PORT); 
});
// console.log("Server runing at port: " + PORT + ".");
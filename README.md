#微信JS SDK服务器端Node.js实现

forked from stiekel/node-wechat-jsapi

增加了mongo cache
## 调用示例：

const wechatJsSign = require('wechat-jsapi-cached');


wechatJsSign(appid, appsecret, url, function(err, signtxt) {
     //put your code here.
});



## 支持以下的测试链接：

使用之前，需要先将`configManagerManager.js`文件中的`appId`和`secret`替换为你的应用的对应值。端口号也是在该文本中修改。

##运行

先进行扩展的安装：

```
npm install --registry=http://registry.npm.taobao.org/
```

再执行`app.js`：

```
node app.js
```

配置完成，并启动起来后，可以直接访问如下链接来测试：

```
http://ip:port/index.html
```

##链接

*   [微信JS-SDK说明文档](http://mp.weixin.qq.com/wiki/7/aaa137b55fb2e0456bf8dd9148dd613f.html)
*   [微信 JS 接口签名校验工具](http://mp.weixin.qq.com/debug/cgi-bin/sandbox?t=jsapisign)
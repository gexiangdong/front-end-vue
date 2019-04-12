# webpack

webpack是用来管理模块编译/打包的工具。它通过一个设定的主文件，来寻找项目所有的依赖(JS, CSS, 需要预处理的CSS等)，并编译打包成最后的浏览器可识别的JS文件。


## 用个简单例子来了解webpack的用途

### 创建一个项目

```bash
mkdir xxx
cd xxx
npm init
```
### 在项目中增加 webpack

分别增加webpack、命令行工具、webpack html插件、开发服务器等。

```bash
npm install webpack --save-dev

npm install webpack-cli --save-dev 

npm install html-webpack-plugin --save-dev 

npm install webpack-dev-server --save-dev 
```

### 创建项目用文件

```
mkdir app
```

在app目录下创建三个文件 index.html index.js add.js

#### index.html

```html
<!DOCTYPE html>
<html>
<head>
<title>hello webapck</title>
</head>
<body>

</body>
</html>
```

####  mymodule.js

```javascript
function sampleMethod(){
  var element = document.createElement('h2');
  element.innerHTML = "h2 from sample method";
  return element;
}
module.exports = sampleMethod;
 
```

#### index.js

```javascript
var m = require('./mymodule');
var app  = document.createElement('div');
app.innerHTML = '<h1>Hello World</h1>';
app.appendChild(m());
document.body.appendChild(app);

```

### 配置

#### 在项目根目录下创建 webpack 配置文件 webpack.config.js，内容如下

```
var HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
  //项目的文件夹 可以直接用文件夹名称 默认即index.js 
  entry: __dirname + "/app/index.js",
  //输出的文件名 合并以后的js会命名为bundle.js
  output: {
    path: __dirname + "/build",
    filename: "bundle.js"
  },

  //添加我们的插件会自动生成一个html文件
  plugins: [
    new HtmlwebpackPlugin({
       template: __dirname + "/app/index.html"//html模版地址

     })
  ],

  //node服务器，实时预览
  devServer: {
    contentBase: __dirname + "/build",//本地服务器所加载的页面所在的目录
    historyApiFallback: true,//不跳转
    inline: true,//当源文件改变时会自动刷新页面
    port:8082 
  }
};

```

#### 修改 package.json 在script段增加 start 命令

```json
  "scripts": {
    "start": "webpack-dev-server --hot --inline"
  },
```

### 运行

```
npm start
```

可以通过浏览器访问 ` http://localhost:8082 `来看下效果了。

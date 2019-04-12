# 配置开发环境

> 环境一定要得心应手，凑合会消耗更多的时间

## 项目路径和开发环境端口号

VUE项目创建好后，默认开发环境是运行在8080端口的根目录的，8080端口是很多开发环境的程序默认的端口，这可能会造成些冲突，我们希望改变这些设置。而且在生成环境中这些VUE项目也不一定在根目录下运行，我们也希望能够改变这个路径。

在项目根目录(package.json所在的目录)创建一个vue.config.js文件，内容如下：

```
module.exports = {
  baseUrl: '/front',
  devServer: {
    port: 9000
  }
}
```
我们来解释一下这个文件内容的含义：baseUrl就是设置的项目所在路径，devServer.port是设置开发环境web服务的端口。经过上面的设置后，访问路径就变成了： http://localhost:9000/front/

    TIPS：修改vue.config.js后需要重新启动开发服务生效。
    


## 解决开发环境的CORS问题
由于浏览器的同源(CORS)策略设定，我们的vue开发环境访问后端会遇到麻烦，这需要后端设置允许localhost:9000，这比较麻烦，vue的开发服务器给我们提供了一个简单方法，它做反向代理，转发到后端的请求，这样前后端就在同一个域名、端口下了。设置代理也是在前面创建的vue.config.js里。

```
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8081',
        ws: true, 
        changeOrigin: true 
      }
    }
  }
}
```
proxy段是新增的反向代理，可以设置多个。key是匹配的url，上述设置中所有/api开始的请求都会被转发到http://localhost:8081这个服务器上处理。
ws参数是表示是否转发websocket请求，true表示转发。
changeOrigin这个参数在target中是虚拟主机时需要，如果target是localhost或其他IP，这个参数有无无所谓。

还有一种更简单的写法，proxy后面直接写一个字符串，例如：

```bash
module.exports = {
  devServer: {
    proxy: 'http://localhost:8081'
  }
}
```
这样就是把所有vue开发服务器自身不处理的请求都转发到http://localhost:8081这里处理。这也适用一些简单情况。

## 更多配置项目

vue.config.js里面还有很多配置项目，不太常用，这里就不细说了，需要请参考[https://cli.vuejs.org/zh/config/#vue-config-js](https://cli.vuejs.org/zh/config/#vue-config-js)


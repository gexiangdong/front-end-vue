# AJAX


可以和以前在javascript中使用`XMLHttpRequest`来调用访问后台接口。


如果你的后台是RESTful形式的，我推荐用`vue-resources`来访问，两者看上去比较契合。 而且vue-resources也可以增加一些全局的配置，来处理登录用的token，统一增加一些header等。还可以全局的监听/拦截发送出去的请求和接收到的响应。

vue-resource也支持JSONP形式的后台，由于浏览器和web服务器对跨域访问的支持，我觉得这个技术应该已经失去了存在的意义了。

# 全局配置和监听
----

## 全局配置

我们访问的后端url，一般有个共同的前缀，这个前缀如果分散写在程序各处，修改起来比较麻烦，设置一个全局的变量，每次都 prefx + 'url'也比较麻烦，vue-resource可以设置一个全局的前缀，每次调用时vue-resource自动加上这个前缀，一般我喜欢在main.js加入如下设置

```
Vue.http.options.root = 'http://localhost:8081/api'
```

有一点需要注意，要想这个http.options.root起作用，需要在http.request时的url没有/开始，例如 this.$http.get('/user')是不会使用options.root前缀的，但this.$http.get('user')则会使用这个前缀。

还可设置一些共同的头信息，每次ajax请求都传递的头信息：

```Javascript
Vue.http.headers.common['Accept'] = 'application/json'
```


## 监听器

可能有这种需求，大部分的ajax调用需要加一个统一的参数，例如token，有就传递，没有则不传递，如果分散的写在每个调用处，程序不优雅，即使写个公共函数，每处都调用此函数，也不够优雅。interceptor就是解决这种问题，让我们的程序看起来足够优雅。

在main.js里加入如下代码：

```JavaScript
Vue.http.interceptors.push(function(request) {
  // 可以对request进行些处理，例如判断下是否已经登录
  // 如果已经登录则加上token
  Vue.http.headers.common['Authorization'] = 'Bearer ' + Vue.prototype.token
  Vue.http.headers.common['Content-Type'] = 'application/json;charset=UTF-8'
  
 
  // return response callback
  return function(response) {
    // 可以在这里判断下响应，例如401，则重定向到登录页
    // 500则出现一个统一的提示页等
    //response.body = '...';
    console.log('interceptors of response', response.status)
  };
});
```
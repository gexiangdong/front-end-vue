vue-resource
----
vue-resource是访问

## 安装

```bash
npm install vue-resource --save
```

## 使用

大多数页面都需要和后台交互，每个view都单独的import vue-resource比较麻烦，因此我们希望在整个项目中一次import，到处使用，这可一在main.js中加入以下代码实现：

```JavaScript
import VueResource from 'vue-resource'

Vue.use(VueResource)
```
以后在各个view里直接使用: 

```JavaScript
this.$http.get('url', param) 
```

## 语法

如果后台是RESTful的API，使用vue-rousources对应起就显得很顺畅了，API的Action就对应这里的函数名，然后最多传三个参数：url、body（可选，不是每个方法都支持）、配置信息（例如header等，可选）。

```
this.$http.get(url, [param])
this.$http.post(url, [body], [param])
this.$http.put(url, [body], [param])
this.$http.delete(url, [param])

this.$http.jsonp(url, [param])
this.$http.head(url, [param])
this.$http.patch(url, [body], [param])

```
这个方法返回的是一个Promise，可以用then来处理响应。

```
this.$http.get(url).then(successCallback, failedCallback)

// 或者直接把方法写这里

this.$http.get(url).then(response => {
    console.log('成功啦，收到的数据是：', response.body)
  }, response => {
    console.log('失败了，服务器状态码:' , response.status)
  }
}
```

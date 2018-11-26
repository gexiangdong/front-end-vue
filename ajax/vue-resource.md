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

```
this.$http.get()
this.$http.post()
this.$http.get
this.$http.get
this.$http.get

```
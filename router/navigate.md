# 页面导航
====


使用vue-router后，用原来的window.location='/url'的方式和普通链接方式仍旧都可做导航。但更丰富了些vue-router的方式。

## template内
```html
<router-link to="/url" >
   <!-- html inside -->
</router-link>

<router-link v-bind:to="toview" >
   <!-- html inside -->
</router-link>
```

## script内

```
this.$router.push(param, 完成导航后的回调函数, 被中止的回调函数)
```
param可以包含path, name, params, query几个参数，param和query是object类型，可以给下一个view传递一个或多个参数。

```json
param = {
  name: 'foo',
  path: '/foo',
  params: {
     pid: 123,
     name: 'Tom'
  },
  query: {
     id: 456
  }
```
有几点要注意：

* path 和 name一般一个即可，两个都有以name为准
* path 和 params如果同时出现，params会失效；
* query传递的参数会在url后以querystring方式传递，被导航到的页面可以使用 his.$route.query.参数名 获取值
* params传递的参数不会在url中显示出来，被导航到的页面可以使用 `this.$route.params.参数名` 获取值。params传递的参数，如果导航到页面后刷新页面会丢失，如果需要保存需要程序自行保存并读取。



还有类似window.history.go(-1)这样写法：

```javascript
// 后退一步记录，等同于window.history.back()
this.$router.go(-1)

// 在浏览器记录中前进一步，等同于window.history.forward()
this.$router.go(1)

```

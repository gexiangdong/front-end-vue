全局变量和函数
----

有时候我们需要使用全局变量和全局函数。vuex插件可以提供这种功能，如果你的全局变量较少，不需要复杂操作，使用vuex就有些杀鸡用牛刀的感觉了。

## 使用prototype解决

我们可以通过prototype来解决：
在main.js增加

```javascript
Vue.prototype.token = 'xxxx-xxx-xxxxx-xxxx-xxxxxxx'
```
以后在所有的view里都可以用this.token访问这个变量了。但在view中没法对这个全局变量赋值，你会发现this.token赋的值仅仅在当前view中有效，离开这个view就失效了。为解决这个问题，可以增加一个全局的函数。

全局函数定义和全局变量类似，在main.js里增加

```javascript
Vue.prototype.setToken = function(newToken){
  Vue.prototype.token = newToken
}
```
这样就可以改变这个全局变量的值了，更改时只需要 this.setToken('newtoken')即可。


## Vue.use

TODO
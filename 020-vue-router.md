vue-router
---

##安装

在用vue create创建工程时，可以选择是否使用vue-router，如果当时没有选中，以后也可随时添加，用如下命令

```bash
npm install vue-router --save
```

## 使用
安装好模块包后，修改main.js

```
import router from './router'

new Vue({
  router,         //修改new Vue的参数，增加这行
  render: h => h(App)
}).$mount('#app')

```

TODO

### 登记路由
新建了页面后，需要在路由文件(src/router.js)登记这个页面，以便能够路由导航，例如新增了Foo.vue，则登记做如下修改

```Javascript
import Foo from './views/Foo.vue'    //这行是新增的
```

```JavaScript
  routes: [
  	{ //其他已经配置的路由
  	},
  	{   // 这部分是新增的，登录这个路由
  	  path: '/foo',
  	  name: 'foo',
  	  component: Foo
  	}
  ]
```	
总共添加了2处： 

* 顶部import了要添加的view
* 在routers的数组里增加一个新的路由

### 路由的懒加载lazy-load

上面添加的路由是同步加载的，也就是浏览器访问这个项目时，会把这个view涉及到的js/css等都要下载到本地，然后才开始启动项目。如果项目较大，view很多，初始下载的内容就会很多，网页启动速度就慢了，可以把一些view设置成懒加载，就是当访问这个页面时才加载，这样可提升启动速度。懒加载在添加路由时设置。

前面不需要immport，在routes添加route时compoennt项目import，如下：

```JavaScript
  {
    path: '/foot',
    name: 'foo',
    commponent: () => import('./views/foo.vue')
  }
```


## 全局事件/钩子 (导航守卫 Navigation Gurads)
可以在路由导航前后增加事件监测。例如如下情景就比较适合在导航前坚持：判断访问的页面是否需要登录，当前用户是否有权限等，如果不符合条件，则跳转到登录或无权限提示页面。

修改src/router.js文件，增加：

```JavaScript
router.beforeEach((to, from, next) => {
  //这里判断，如果继续处理，调用next()
  //如果重定向，调用next({path: '/newurl'})
  if(to.path !== '/'){
    next({path: '/'})
    return
  }
  next()
})
```

类似的事件还有：

* 全局
  * beforeEach
  * afterEach
* 单个路由的路由表定义 beforeEnter
  
  ```bash
  {
      path: '/foo',
      component: Foo,
      beforeEnter: (to, from, next) => {
        // ...
      }
    }
 ```
* 在view页面定义的路由
  * beforeRouteEnter
  * beforeRouteUpdate
  * beforeRouteLeave

### 事件执行顺序
TODO: 图和例子(混合入view里面的事件顺序）

1. 导航被触发。
1. 在失活的组件里调用离开守卫。
1. 调用全局的 beforeEach 守卫。
1. 在重用的组件里调用 beforeRouteUpdate 守卫 (2.2+)。
1. 在路由配置里调用 beforeEnter。
1. 解析异步路由组件。
1. 在被激活的组件里调用 beforeRouteEnter。
1. 调用全局的 beforeResolve 守卫 (2.5+)。
1. 导航被确认。
1. 调用全局的 afterEach 钩子。
1. 触发 DOM 更新。
1. 用创建好的实例调用 beforeRouteEnter 守卫中传给 next 的回调函数。


## History

hash模式与history模式


## 官方文档

[https://router.vuejs.org/zh/](https://router.vuejs.org/zh/)

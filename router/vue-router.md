# vue-router


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
  router,         //告诉Vue使用router
  render: h => h(App)
}).$mount('#app')

```


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
* 在routers的数组里增加一个新的路由，给路由起一个名字并登记一个url地址。以后导航时可以用这个名字或地址

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


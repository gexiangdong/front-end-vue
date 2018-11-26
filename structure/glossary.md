# VUE中的术语和词汇
----

* page 页面，一般的vue项目是单页面应用，只有一个html文件（默认是src/public/index.html)，也可创建多页面应用。
* view 视图，对应一个.vue文件，一般放在src/views目录下。一个vue项目内一般有多个视图。
* component 组件，一个组件对应一个.vue文件，一般在src/components目录下，组件被视图引用，成为视图中的一部分。
* route 路由，视图之间导航被称作路由，vue的路由由插件vue-router实现，路由并不是vue项目的必需组成部分，但大部分项目使用vue-router来管理路由。在vue-router中，可以对路由的导航进行监听并控制。
* mode 默认有development, production, test三个不同的mode， 可以理解为每个mode即一个程序的运行的环境，类似spring中的profile


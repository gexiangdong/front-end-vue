# 相关的工具、技术和术语


* **node.js** node.js是javascript的一个运行环境，是一个服务器端的javascript解释器，有些地方简称node，也有把“.”省略掉称为nodejs。
* **NPM** npm是node.js的包管理工具，和node.js一起发行。
* **webpack** 前端资源模块化管理和打包工具。它可以将许多松散的模块按照依赖和规则打包成符合生产环境部署的前端资源。npm会使用它来打包项目。和webpack类似的还有browserify和rollup。
* **ES6** 全称是ECMAScript 6.0，ECMAScript是欧洲计算机制造商协会（ECMA）制定的Javascript标准，因为JavaScript被Sun公司注册了商标，在标准中不能使用，所以称为ECMAScript。ES6发布于2015年，相对之前的版本有了非常多的改变。而且ECMA决定每年6月发布一个新版本，版本号以年份明明，于是2015年发布的就是ES2015，还有之后的ES2016, ES2017等等。ES6成了大家对ES2015之后版本的泛称，涵盖了ES2015, ES2016, ES2017等。
* **Babel** 编译工具，可以把用JavaScript最新版语法编写的js代码转成老版的ES5格式，以便在老旧的浏览器内执行。也就是说，借助Babel，我们可以按照新版语法编写，Babel自动帮我们实现浏览器兼容。Babel支持两种转换方式：1、编译后发布ES5格式；2、在线转换。
* **ESLint** Javscript代码检查工具，用于检查代码风格和语法，帮助我们写出质量较高的代码。可配置检查的范围。
* **VUE**
* **CSS Pre-Processor** 网页中使用的CSS有些不利于工程化的弊端，例如无法定义全局变量（例如：控制一个全局统一的颜色、边距），有人创造了CSS的预处理器来解决这个问题，就是用另外一种类似CSS的语言编写，然后由预处理器编译成CSS并加入到项目中。比较常见的有：Sass/SCSS/Less/Stylus等
* **TypeScript** 微软发明的，在Javascript上的扩展语言，可编译成Javascript。

## 其他前端工具

下面几种技术、工具在本书中不会讲解，也是前端工程化的实现方案，需要了解一下。

* **React** 前端开发框架，VUE的竞品。
* **Angular** Google维护的开源前端框架，第2版前称为AngularJs，VUE的竞品
* **Yarn** 另外一种包管理工具，NPM的竞品。类似竞品还有bower。
* **Bootstrap** 一套CSS/JS框架，兼容多种终端设备，可作为单独框架独立使用，也可加入到VUE中，也有人做了bootstrap-vue的插件。


# 创建一个Hello word


#创建工程
现在你的开发环境应该已经安装好node、npm和vue3了，下面我们来开始创建一个工程。

首先在命令行下面进入到你希望工程所在的目录（不用手工创建工程目录，下面的命令会自动创建）。之后执行命令：

```bash
vue create project-name
```
之后会出现2个选项，是使用默认的，还是手工选择功能，我们来看看Manually select features里有哪些功能：


- [x] Babel
- [ ] TypeScript
- [ ] Router
- [ ] Vuex
- [ ] Css Pre-processors
- [x] Linter / Formatter

Router默认没有被选中，我建议此处选中它。本教程后续章节涉及到导航相关的内容都是以vue-router模块为例的。vue-router也是VUE官方指定的路由管理包。

* Babel  -------  ES6转换工具，可以把ES6转换成ES5格式，以便兼容老旧的浏览器
* TypeScript 
* Progressive Web App (PWA) Support --- Google的web
* Router  ------ VUE的页面路由管理器插件，大点的项目一般都需要
* Vuex  ---- 可用来
* CSS Pre-processors ---- CSS的预编辑处理语言，如果不喜欢直接写CSS，而是喜欢下面这几种方式，那么可以选择它，如果你对这行不了解，建议你不要选中它。
  * Sass/SCSS
  * Less
  * Stylus
* Linter / Formatter
  * ESlint with error prevention only
  * ESLint + Airbnd config
  * ESLint + Standard config
  * ESLint + Prettier
* Unit Testing
* E2E Testing

vue create命令完成后，会创建好工程，工程名就是新建的子目录名称。
进入子目录后，可以用

```bash
npm run serve
```
来启动开发环境，会在8080端口运行一个web服务器，用浏览器（强烈建议用chrome）打开这个网址

```
http://localhost:8080
```
就可以看到新创建的项目了。

## 已存在的工程
如果项目是已经创建好的（从git中获取的其他团队成员创建、从网上下载等等），进入到工程目录后，首先运行：

```bash
npm install
``
安装好依赖的node的模块，之后同样运行

```bash
npm run serve
```
就可以了。如果出错，并且在其他人那里不出错，一般是安装某个包的时候没有修改package.json，可自己安装一下需要的包，并用--save参数保存到package.json中，这样以便以后不需要再解决类似问题。

```bash
npm install 'package-name' --save
```
